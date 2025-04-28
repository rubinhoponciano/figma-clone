import Link from "next/link";
import { Button } from "@/components/ui/button";

const LearningCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-gray-100 rounded-lg mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Learning = () => {
  return (
    <section className="py-20 bg-white">
      <div className="figma-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learn how to use Figma</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="#"
              className="flex items-center bg-gray-100 rounded-lg px-4 py-2 gap-2 hover:bg-gray-200 transition-colors"
            >
              <span className="font-medium">Figma Design: Beginner tutorial</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="#"
              className="flex items-center bg-gray-100 rounded-lg px-4 py-2 gap-2 hover:bg-gray-200 transition-colors"
            >
              <span className="font-medium">Intro to design systems</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="#"
              className="flex items-center bg-gray-100 rounded-lg px-4 py-2 gap-2 hover:bg-gray-200 transition-colors"
            >
              <span className="font-medium">Guide to FigJam</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <LearningCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 17V7l7 5-7 5Z" />
              </svg>
            }
            title="Watch tutorials"
            description="Learn the basics through step-by-step video tutorials from Figma experts."
          />

          <LearningCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            }
            title="Read the documentation"
            description="Explore comprehensive guides and reference materials in the Figma Help Center."
          />

          <LearningCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
              >
                <path d="M17 6.1H3" />
                <path d="M21 12.1H3" />
                <path d="M15.1 18H3" />
              </svg>
            }
            title="Join the community"
            description="Connect with other Figma users, share resources, and get help with your design challenges."
          />
        </div>
      </div>
    </section>
  );
};

export default Learning;
