import Hero from "../pages/hero/hero.js";
import Experience from "../pages/experience/experience.js";
import BestLife from "../pages/bestlife/bestlife.js";
import Testimonials from "../pages/testimonials/testimonials.js";
import DestinationsSection from "../pages/destinations/destinations.js";
import Compare from "../pages/compare/compare.js";
import PaymentPage from "../pages/payment/payment.js";
import CTA from "../pages/cta/cta.js";
import Footer from "../pages/footer/footer.js";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="routes">
        <DestinationsSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="bestlife">
        <BestLife />
      </section>
      <section id="compare">
        <Compare />
      </section>
      <section id="payment">
        <PaymentPage />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
