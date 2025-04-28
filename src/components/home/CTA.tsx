import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-figma-lime/30 relative overflow-hidden">
      <div className="figma-container">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build better products, together.
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-800">
            Everything your team needs to brainstorm, design, and build.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="figma-btn-primary px-8 py-6 text-base">
              Get started for free
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-figma-purple/30" />
        <div className="absolute top-10 -right-8 h-16 w-16 rounded-full bg-figma-green/40" />
        <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-figma-green/20" />
        <div className="absolute top-16 left-1/4 h-20 w-20 rounded-full bg-yellow-300/20" />
      </div>
    </section>
  );
};

export default CTA;
