import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: "SHOP", url: "/shop" },
    { text: "MODELS", url: "/models" },
    { text: "TECHNOLOGY", url: "/technology" },
    { text: "SUPPORT", url: "/support" },
  ];

  return (
    <nav
      className={`${
        transparent
          ? "absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/shop"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              SHOP
            </Link>
            <Link
              href="/models"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              MODELS
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="flex-shrink-0">
              {/* Full logo for desktop/tablet */}
              <img
                src="/logo.png"
                alt="BezelGuard"
                className="hidden md:block h-8 w-auto"
              />
              {/* Small abbreviated logo for mobile */}
              <img
                src="/logosmall.png"
                alt="BG"
                className="block md:hidden h-8 w-auto"
              />
            </Link>
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/technology"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              TECHNOLOGY
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              SUPPORT
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-t border-gray-100">
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                SHOP
              </Link>
              <Link
                href="/models"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                MODELS
              </Link>
              <Link
                href="/technology"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                TECHNOLOGY
              </Link>
              <Link
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                SUPPORT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
