import Link from "next/link";

const Hero = () => (
  <>
    {/* Hero Section with Background Image */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Image placeholder - replace with actual luxury watch lifestyle image */}
        <div className="absolute inset-0 bg-[url('/photos/homepage/bezel-guard-hero.jpg')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-gray-900 px-4 max-w-4xl mx-auto">
        <h1 className="text-lg font-light tracking-widest uppercase mb-4 text-gray-600">
          PROTECTION. SIMPLIFIED.
        </h1>
        <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight">
          BEZELGUARD.
          <br />
          <span className="font-normal">OUT NOW.</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/shop"
            className="bg-gray-900 text-white px-8 py-4 font-light hover:bg-gray-800 transition-colors"
          >
            SHOP NOW
          </Link>
          <Link
            href="/technology"
            className="border border-gray-900 text-gray-900 px-8 py-4 font-light hover:bg-gray-900 hover:text-white transition-colors"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>

    {/* Brand Quote Section */}
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl md:text-4xl font-light leading-relaxed">
                        &quot;Think of it as a guardian angel for your timepiece.&quot;
        </h3>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-40">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-light text-gray-600">GQ</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-2xl font-light text-gray-600">Bloomberg</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-2xl font-light text-gray-600">Forbes</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-2xl font-light text-gray-600">
              Watch Journal
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Shop The Look Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          SHOP THE LOOK
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lifestyle Image */}
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {/* Image placeholder - luxury lifestyle with BezelGuard */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="w-16 h-16 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <p>Luxury Lifestyle Image</p>
                <p className="text-sm">BezelGuard in Action</p>
              </div>
            </div>
          </div>

          {/* Product Card */}
          <div className="text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="aspect-square bg-white rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-20 h-20 bg-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
                  </div>
                  <p className="font-medium">BezelGuard Pro</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">
                BEZELGUARD PRO - STEALTH BLACK
              </h3>
              <p className="text-gray-600 mb-4">
                Ultimate protection for luxury timepieces
              </p>
              <p className="text-2xl font-bold mb-6">$24.99 + shipping</p>
              <Link
                href="/product/bezelguard-pro"
                className="bg-gray-900 text-white px-8 py-3 font-light hover:bg-gray-800 transition-colors inline-block"
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
