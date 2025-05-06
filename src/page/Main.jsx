import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import Header from "../partials/navigation/Header";

const Main = () => {
  return (
    <main className="bg-[#03313e]">
      <Header />
      <Hero />
      <Stats/>
      <Services/>
      <Projects/>
    </main>
  );
};

export default Main;
