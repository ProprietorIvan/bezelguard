import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const informationLinks = [
    { text: "About Us", url: "/about" },
    { text: "Contact Us", url: "/contact" },
    { text: "Wholesale Contact", url: "/wholesale" },
    { text: "Blog", url: "/news" },
    { text: "Press", url: "/press" },
    { text: "Retailers", url: "/retailers" },
    { text: "Shipping, Returns & Terms", url: "/shipping" },
    { text: "About the Collection", url: "/collection" },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      {/* Top Features Strip */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
              </div>
              <h3 className="font-bold text-sm mb-2">
                FREE WORLDWIDE SHIPPING OVER $150
              </h3>
              <p className="text-gray-600 text-sm">
                Express shipping available
              </p>
            </div>
            <div>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
              </div>
              <h3 className="font-bold text-sm mb-2">SATISFIED OR REFUNDED</h3>
              <p className="text-gray-600 text-sm">Easy 14-days returns</p>
            </div>
            <div>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
              </div>
              <h3 className="font-bold text-sm mb-2">DESIGNED FOR SECURITY</h3>
              <p className="text-gray-600 text-sm">
                The ultimate in comfort and protection
              </p>
            </div>
            <div>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
              </div>
              <h3 className="font-bold text-sm mb-2">MADE WITH PRECISION</h3>
              <p className="text-gray-600 text-sm">
                Meticulously crafted from premium materials
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">NEWSLETTER</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Sign up to our newsletter to receive exclusive updates on new
              BezelGuard models, security tips, and watch protection insights.
            </p>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-6">INFORMATION</h3>
            <ul className="space-y-3">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-6">ABOUT</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              BezelGuard - The revolutionary security system for luxury
              timepieces. Born from a passion for watches and the need for
              protection in an uncertain world.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} BezelGuard. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/cookies" className="hover:text-gray-900">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
