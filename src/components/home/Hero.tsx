import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 min-h-[70vh] flex items-center">
      <div className="figma-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Think bigge rSomos
            <br />
            Build faster.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Figma helps design and development teams build great products, together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="figma-btn-primary px-6 py-6 text-base w-full sm:w-auto">
              Get started for free
            </Button>
            <Link
              href="#explore-figma"
              className="text-base font-medium underline underline-offset-4"
            >
              Explore Figma Design
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-20 bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
          {/* Figma interface mockup */}
          <div className="aspect-[16/10] bg-[#F5F5F5] w-full flex flex-col items-center justify-center relative">
            <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-zinc-200 flex items-center px-4">
              <div className="flex space-x-2 absolute left-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto flex space-x-4">
                <div className="h-5 w-20 bg-zinc-100 rounded"></div>
                <div className="h-5 w-32 bg-zinc-100 rounded"></div>
                <div className="h-5 w-20 bg-zinc-100 rounded"></div>
              </div>
            </div>

            <div className="flex w-full h-full pt-10">
              {/* Left sidebar */}
              <div className="w-16 bg-zinc-100 border-r border-zinc-200 flex flex-col items-center py-4 space-y-4">
                <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                <div className="w-8 h-8 rounded bg-zinc-200"></div>
                <div className="w-8 h-8 rounded bg-zinc-200"></div>
                <div className="w-8 h-8 rounded bg-zinc-200"></div>
              </div>

              {/* Main canvas area */}
              <div className="flex-grow bg-[#E5E5E5] relative">
                {/* Some mockup design elements */}
                <div className="absolute top-10 left-10 w-40 h-20 bg-white rounded-md shadow-sm"></div>
                <div className="absolute top-20 left-60 w-80 h-40 bg-white rounded-md shadow-sm"></div>
                <div className="absolute bottom-10 right-20 w-60 h-30 bg-white rounded-md shadow-sm"></div>

                {/* Cursor indicators */}
                <div className="absolute top-1/4 left-1/3 w-6 h-6 rounded-full bg-blue-500 opacity-50"></div>
                <div className="absolute top-1/2 right-1/3 w-6 h-6 rounded-full bg-purple-500 opacity-50"></div>
              </div>

              {/* Right sidebar */}
              <div className="w-64 bg-white border-l border-zinc-200 hidden md:block">
                <div className="p-4 border-b border-zinc-200">
                  <div className="w-full h-6 bg-zinc-100 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-zinc-100 rounded"></div>
                </div>
                <div className="p-4">
                  <div className="w-full h-4 bg-zinc-100 rounded mb-2"></div>
                  <div className="w-full h-4 bg-zinc-100 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-zinc-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg mb-6 text-center text-gray-700">
            Design and refine products with your team, in one shared design file.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
