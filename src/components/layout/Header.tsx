import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-zinc-200">
      {/* Top banner */}
      <div className="w-full bg-black text-white text-sm py-2 px-4 text-center">
        <p>
          Figma's newest product announcements coming May 7. Join Config 25
          virtually for free.{" "}
          <Link href="#" className="underline font-medium">
            Register
          </Link>
        </p>
      </div>

      {/* Main navigation */}
      <div className="figma-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo and primary nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <svg
                width="38"
                height="57"
                viewBox="0 0 38 57"
                className="w-8 h-8"
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

            <nav className="hidden md:flex items-center space-x-1">
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium hover:bg-zinc-50 rounded-md">
                  Product
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Dropdown menu would go here */}
              </div>
              <Link
                href="#"
                className="px-3 py-2 text-sm font-medium hover:bg-zinc-50 rounded-md"
              >
                Enterprise
              </Link>
              <Link
                href="#"
                className="px-3 py-2 text-sm font-medium hover:bg-zinc-50 rounded-md"
              >
                Community
              </Link>
              <Link
                href="#"
                className="px-3 py-2 text-sm font-medium hover:bg-zinc-50 rounded-md"
              >
                Pricing
              </Link>
            </nav>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="#"
              className="text-sm font-medium px-3 py-2 hover:bg-zinc-50 rounded-md"
            >
              Contact sales
            </Link>
            <Link
              href="#"
              className="text-sm font-medium px-3 py-2 hover:bg-zinc-50 rounded-md"
            >
              Log in
            </Link>
            <Button className="figma-btn-primary text-sm font-medium">
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md hover:bg-zinc-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
