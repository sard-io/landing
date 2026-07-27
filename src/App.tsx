import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Partners />
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  );
}
