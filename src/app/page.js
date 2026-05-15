import SmoothScroller from "@/components/portfolio/SmoothScroller";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import TechStack from "@/components/portfolio/TechStack";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <SmoothScroller>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <div className="section-line max-w-7xl mx-auto" />
        <About />
        <div className="section-line max-w-7xl mx-auto" />
        <TechStack />
        <div className="section-line max-w-7xl mx-auto" />
        <Education />
        <div className="section-line max-w-7xl mx-auto" />
        <Projects />
        <div className="section-line max-w-7xl mx-auto" />
        <Contact />
        <Footer />
      </main>
    </SmoothScroller>
  );
}
