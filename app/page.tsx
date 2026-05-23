import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white selection:text-black">
      {/* Header with navigation and social links */}
      <Header />

      {/* 
        ScrollyCanvas contains the 500vh scroll section and the sticky canvas + overlay 
      */}
      <ScrollyCanvas />
      
      {/* 
        Projects section appears after the 500vh scrolling finishes
      */}
      <Projects />

      {/*
        Experience and Skills section
      */}
      <Experience />

      {/*
        Footer with contact information and social links
      */}
      <Footer />
    </main>
  );
}
