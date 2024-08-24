import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-3 lg:px-20">
        <Services />
        <About />
        <Blog />
        <Contact />
        <Map />
      </div>
    </>
  );
}
