import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string }[];
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-sm font-medium">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-sm text-gray-500 hover:text-black"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  // Footer data structure
  const productLinks = [
    { text: "Figma Design", href: "/design" },
    { text: "FigJam", href: "/figjam" },
    { text: "Dev Mode", href: "/dev-mode" },
    { text: "Figma Slides", href: "/slides" },
    { text: "Release notes", href: "/release-notes" },
    { text: "Downloads", href: "/downloads" },
  ];

  const plansLinks = [
    { text: "Pricing", href: "/pricing" },
    { text: "Enterprise", href: "/enterprise" },
    { text: "Organization", href: "/organization" },
    { text: "Professional", href: "/professional" },
  ];

  const useCaseLinks = [
    { text: "UI design", href: "/ui-design-tool" },
    { text: "UX design", href: "/ux-design-tool" },
    { text: "Wireframing", href: "/wireframe-tool" },
    { text: "Diagramming", href: "/figjam/diagramming-tool" },
    { text: "Prototyping", href: "/prototyping" },
    { text: "Brainstorming", href: "/figjam/brainstorming-tool" },
  ];

  const resourceLinks = [
    { text: "Blog", href: "/blog" },
    { text: "Best practices", href: "/best-practices" },
    { text: "Templates", href: "/templates" },
    { text: "Developers", href: "/developers" },
    { text: "Integrations", href: "/product-integrations" },
    { text: "Resource library", href: "/resource-library" },
  ];

  const compareLinks = [
    { text: "Sketch", href: "/figma-vs-sketch" },
    { text: "Adobe XD", href: "/figma-vs-adobe-xd" },
    { text: "Framer", href: "/figma-vs-framer" },
    { text: "Miro", href: "/figjam-vs-miro" },
  ];

  const companyLinks = [
    { text: "About us", href: "/about" },
    { text: "Events", href: "/events" },
    { text: "Customers", href: "/customers" },
    { text: "Careers", href: "/careers" },
    { text: "Newsroom", href: "/newsroom" },
  ];

  const languages = [
    { text: "English", href: "/" },
    { text: "Deutsch", href: "/de-de/" },
    { text: "Español (España)", href: "/es-es/" },
    { text: "Español (Latinoamérica)", href: "/es-la/" },
    { text: "Français", href: "/fr-fr/" },
    { text: "Nederlands", href: "/nl-nl/" },
    { text: "Polski", href: "/pl-pl/" },
    { text: "Português (Brasil)", href: "/pt-br/" },
    { text: "日本語", href: "/ja-jp/" },
    { text: "한국어", href: "/ko-kr/" },
  ];

  return (
    <footer className="border-t border-zinc-200">
      <div className="figma-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Plans" links={plansLinks} />
          <FooterColumn title="Use cases" links={useCaseLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Compare" links={compareLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <svg
                  width="38"
                  height="57"
                  viewBox="0 0 38 57"
                  className="w-6 h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0001 28.5C19.0001 25.9804 20.0001 23.5641 21.7574 21.8069C23.5148 20.0496 25.9307 19.0498 28.4503 19.0498C30.97 19.0498 33.3861 20.0496 35.1434 21.8069C36.9007 23.5641 37.9006 25.9804 37.9006 28.5C37.9006 31.0196 36.9007 33.4359 35.1434 35.1931C33.3861 36.9504 30.97 37.9502 28.4503 37.9502C25.9307 37.9502 23.5148 36.9504 21.7574 35.1931C20.0001 33.4359 19.0001 31.0196 19.0001 28.5Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M0.0996094 47.95C0.0996094 45.4304 1.09956 43.0143 2.85686 41.2571C4.61416 39.4999 7.03007 38.5 9.54981 38.5H19V47.95C19 50.4696 18.0001 52.8855 16.2428 54.6427C14.4855 56.3999 12.0696 57.3998 9.54981 57.3998C7.03007 57.3998 4.61416 56.3999 2.85686 54.6427C1.09956 52.8855 0.0996094 50.4696 0.0996094 47.95V47.95Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M19.0001 0V19.05H28.4503C30.97 19.05 33.3861 18.0502 35.1434 16.293C36.9007 14.5357 37.9006 12.1196 37.9006 9.6C37.9006 7.08043 36.9007 4.66446 35.1434 2.90718C33.3861 1.14991 30.97 0.15 28.4503 0.15L19.0001 0Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M0.0996094 9.6C0.0996094 12.1196 1.09956 14.5357 2.85686 16.293C4.61416 18.0502 7.03007 19.05 9.54981 19.05H19.0001V0.15H9.54981C7.03007 0.15 4.61416 1.14991 2.85686 2.90718C1.09956 4.66446 0.0996094 7.08043 0.0996094 9.6V9.6Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M0.0996094 28.5C0.0996094 31.0196 1.09956 33.4357 2.85686 35.193C4.61416 36.9502 7.03007 37.9501 9.54981 37.9501H19.0001V19.0498H9.54981C7.03007 19.0498 4.61416 20.0497 2.85686 21.807C1.09956 23.5642 0.0996094 25.9804 0.0996094 28.5V28.5Z"
                    fill="#A259FF"
                  />
                </svg>
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="#" className="text-gray-500 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-youtube"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <button className="flex items-center space-x-1 text-sm border border-zinc-300 rounded-md px-4 py-2">
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Language dropdown would go here */}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs text-gray-500">
              © 2025 Figma, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
