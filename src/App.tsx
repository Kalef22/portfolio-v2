import { useScrollREveal } from "./hooks/useScrollReveal";

import Navbar from "./components/Navbar";   // exportacion por default
import { Footer } from "./components/Footer";   // exportación nombrada
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorGlow from "./components/ui/CursorGlow";
import GradientOrbs from "./components/ui/GradientOrbs";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import { Timeline } from "./components/timeline/Timeline";
import { CloudSection } from "./components/cloud/CloudSection";

function App() {
    useScrollREveal();
    return (
        <>
            <ScrollProgress />
            <CursorGlow />
            <GradientOrbs />
            
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
