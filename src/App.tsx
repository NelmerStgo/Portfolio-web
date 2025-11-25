import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/sections/Hero/Hero";
import { About } from "./components/sections/About/About";
import { Projects } from "./components/sections/Projects/Projects";
import { Contact } from "./components/sections/Contact/Contact";
import { Footer } from "./components/layout/Footer/Footer";
import './styles/globals.css';
import { useSmoothScroll } from "./hooks/useSmoothScrooll";

function App() {
  useSmoothScroll();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
