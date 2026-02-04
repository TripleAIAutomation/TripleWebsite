import { NextRequest, NextResponse } from 'next/server';

const VALID_NEEDS = ['dashboards', 'automations', 'both', 'not_sure'];
const MAX_FIELD_LENGTH = 500;
const MAX_NOTES_LENGTH = 2000;

// Simple in-memory rate limiter (resets on server restart)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'Contact form is not configured.' },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  // Validate & sanitize
  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const company = sanitize(body.company);
  const role = sanitize(body.role);
  const need = sanitize(body.need);
  const notes = typeof body.notes === 'string' ? body.notes.trim().slice(0, MAX_NOTES_LENGTH) : '';

  if (!name || !email || !company || !role || !need || !notes) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    );
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email address.' },
      { status: 400 }
    );
  }

  // Need must be valid option
  if (!VALID_NEEDS.includes(need)) {
    return NextResponse.json(
      { error: 'Invalid selection for "need".' },
      { status: 400 }
    );
  }

  // Forward to n8n webhook
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        company,
        role,
        need,
        notes,
        timestamp: new Date().toISOString(),
        source: 'Website',
      }),
    });

    if (!response.ok) {
      throw new Error('Webhook returned error');
    }

    return NextResponse.json({ success: true, message: 'Contact form received' });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 502 }
    );
  }
}
