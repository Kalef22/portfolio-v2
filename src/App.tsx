import { useScrollREveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";   // exportacion por default
import { Footer } from "./components/Footer";   // exportación nombrada
import { Timeline } from "./components/timeline/Timeline";
import { CloudSection } from "./components/cloud/CloudSection";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
    useScrollREveal();
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <CloudSection />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
