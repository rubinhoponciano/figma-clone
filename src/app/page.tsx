import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Learning from "@/components/home/Learning";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Testimonial />
        <Features />
        <CTA />
        <Learning />
      </main>
      <Footer />
    </div>
  );
}
