import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 pb-8 sm:px-8">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
