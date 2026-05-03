import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Thesis from "@/components/Thesis";
import Model from "@/components/Model";
import Products from "@/components/Products";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustedBy />
      <Thesis />
      <Model />
      <Products />
      <About />
      <CTA />
      <Footer />
    </>
  );
}
