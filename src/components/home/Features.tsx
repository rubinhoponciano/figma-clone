import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({
  title,
  description,
  linkText,
  linkHref,
  bgColor,
  icon,
}: {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  bgColor: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={`${bgColor} rounded-xl p-8 md:p-10 flex flex-col h-full`}
    >
      {icon && <div className="mb-5">{icon}</div>}
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-gray-800 mb-6 flex-grow">{description}</p>
      <Link
        href={linkHref}
        className="text-black font-medium inline-flex items-center group"
      >
        {linkText}
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

const AIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6667 14.6667V9.33334C26.6667 8.27248 25.8059 7.33334 24.6667 7.33334H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33334 14.6667V9.33334C5.33334 8.27248 6.19415 7.33334 7.33334 7.33334H12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.6667 17.3333V22.6667C26.6667 23.7275 25.8059 24.6667 24.6667 24.6667H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33334 17.3333V22.6667C5.33334 23.7275 6.19415 24.6667 7.33334 24.6667H12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 5.33334V9.33334" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 22.6667V26.6667" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.33334 16H5.33334" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.6667 16H22.6667" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="2.66667" stroke="#000000" strokeWidth="2"/>
  </svg>
);

const LayoutIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.33334" y="5.33334" width="21.3333" height="21.3333" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33334 12H26.6667" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3333 12V26.6667" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PrototypeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6667 14.6667L16 5.33334L5.33334 14.6667V26.6667H26.6667V14.6667Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 26.6667V16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="12" r="2" stroke="#000000" strokeWidth="2"/>
  </svg>
);

const PresentationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6.66666" width="24" height="16" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 26.6667L16 22.6667L20 26.6667" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 22.6667V16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Features = () => {
  return (
    <section className="py-20">
      <div className="figma-container">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Redesign how you design.
          </h2>
          <p className="text-xl text-gray-700">
            Explore your ideas freely and iterate quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature cards */}
          <FeatureCard
            icon={<AIIcon />}
            title="Generate mockups in seconds with AI"
            description="Instantly create mockups to explore a bigger option space, helping you find the right design faster."
            linkText="Learn more"
            linkHref="#"
            bgColor="bg-figma-purple/20"
          />

          <FeatureCard
            icon={<LayoutIcon />}
            title="Design consistently with Auto Layout"
            description="Create flexible designs that scale across different screen sizes with responsive components and auto layout."
            linkText="Try auto layout"
            linkHref="#"
            bgColor="bg-figma-green/20"
          />

          <FeatureCard
            icon={<PrototypeIcon />}
            title="Make prototypes feel real"
            description="Create advanced interactions and transitions right in the browser without code, allowing you to test usability early."
            linkText="Learn about prototyping"
            linkHref="#"
            bgColor="bg-figma-lime/30"
          />

          <FeatureCard
            icon={<PresentationIcon />}
            title="Embed prototypes in your presentations"
            description="Share working interactive prototypes in slides, docs, and more for better stakeholder collaboration."
            linkText="See how to embed"
            linkHref="#"
            bgColor="bg-figma-purple/10"
          />
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Bring design and dev together.
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0066FF" strokeWidth="2"/>
                    <path d="M3 9H21" stroke="#0066FF" strokeWidth="2"/>
                    <circle cx="6" cy="6" r="1" fill="#0066FF"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">Design systems that scale</h3>
                <p className="text-gray-700 mb-6">
                  Streamline the product development process with a design system that's aligned across design and code.
                </p>
                <Button variant="link" className="px-0 text-black font-medium flex items-center group">
                  Learn about design systems
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="h-48 bg-blue-50 flex items-center justify-center border-t border-zinc-200">
                <div className="grid grid-cols-4 gap-3 p-4">
                  <div className="w-12 h-12 bg-white rounded border border-blue-200"></div>
                  <div className="w-12 h-12 bg-white rounded border border-blue-200"></div>
                  <div className="w-12 h-12 bg-white rounded border border-blue-200"></div>
                  <div className="w-12 h-12 bg-white rounded border border-blue-200"></div>
                  <div className="w-12 h-12 bg-white rounded border border-blue-200"></div>
                  <div className="w-12 h-12 bg-white rounded border border-blue-200"></div>
                  <div className="w-12 h-12 bg-white rounded border border-blue-200"></div>
                  <div className="w-12 h-12 bg-white rounded border border-blue-200"></div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L7 17" stroke="#00AA55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7L17 17" stroke="#00AA55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#00AA55" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">Translate designs into code</h3>
                <p className="text-gray-700 mb-6">
                  Help developers understand and implement your designs perfectly with Dev Mode, a dedicated space built for engineers.
                </p>
                <Button variant="link" className="px-0 text-black font-medium flex items-center group">
                  Explore Dev Mode
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="h-48 bg-green-50 flex items-center justify-center border-t border-zinc-200">
                <div className="px-6 w-full">
                  <div className="h-6 bg-white rounded mb-2 w-full"></div>
                  <div className="h-6 bg-white rounded mb-2 w-3/4"></div>
                  <div className="h-6 bg-white rounded mb-2 w-2/3"></div>
                  <div className="h-6 bg-white rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
