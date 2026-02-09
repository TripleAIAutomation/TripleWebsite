import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Services from '@/components/Services';
import UseCases from '@/components/UseCases';
import ProductShowcase from '@/components/ProductShowcase';
import Process from '@/components/Process';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <ProblemSolution />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <UseCases />
        <div className="section-divider" />
        <ProductShowcase />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
