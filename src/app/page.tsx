import { CallToAction, Faqs, Features, Footer, Hero, Integrations, Introduction, LogoTicker, Navbar, } from "@/sections";
export default function Home() {
  return (
  <>
    <Navbar />
    <Hero />
    <LogoTicker />
    <Introduction />
    <Features />
    <Integrations />
    <Faqs />
    <CallToAction />
    <Footer />
  </>
  );
}
