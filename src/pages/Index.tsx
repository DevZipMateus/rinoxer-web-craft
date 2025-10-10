import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Gallery />
      <Contact />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
