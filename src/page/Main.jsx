import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../partials/Footer";
import Header from "../partials/navigation/Header";

const Main = () => {
  return (
    <main className="bg-[#03313e] relative">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
