import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import CTABanner from "./components/CTABanner";
import SMSTerms from "./components/SMSTerms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Portfolio />
      <CTABanner />
      <SMSTerms />
      <Contact />
      <Footer />
    </>
  );
}
