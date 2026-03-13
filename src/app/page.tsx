import AgeGate from "./components/AgeGate";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Deals from "./components/Deals";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Promo from "./components/Promo";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <AgeGate />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sage-dark focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>
      <ScrollReveal />
      <Nav />
      <main id="main-content">
        <Hero />
        <Products />
        <Deals />
        <About />
        <Testimonials />
        <Promo />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </>
  );
}
