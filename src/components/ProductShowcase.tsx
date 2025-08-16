import Link from "next/link";

const ProductShowcase = () => {
  const products = [
    {
      id: "bezelguard-pro-black",
      name: "BEZELGUARD PRO - STEALTH BLACK",
      price: "$24.99",
      image: "Product image placeholder",
      category: "Professional Series",
    },
    {
      id: "bezelguard-classic-silver",
      name: "BEZELGUARD CLASSIC - SILVER",
      price: "$24.99",
      image: "Product image placeholder",
      category: "Classic Series",
    },
    {
      id: "bezelguard-sport-blue",
      name: "BEZELGUARD SPORT - OCEAN BLUE",
      price: "$24.99",
      image: "Product image placeholder",
      category: "Sport Series",
    },
    {
      id: "bezelguard-luxury-gold",
      name: "BEZELGUARD LUXURY - GOLD EDITION",
      price: "$24.99",
      image: "Product image placeholder",
      category: "Luxury Collection",
    },
  ];

  return (
    <>
      {/* New Arrivals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-widest text-gray-600 mb-4">
              NEW ARRIVALS
            </h2>
            <div className="flex justify-center space-x-12">
              <Link
                href="/models/professional"
                className="text-2xl font-light border-b-2 border-black pb-2"
              >
                PROFESSIONAL
              </Link>
              <Link
                href="/models/classic"
                className="text-2xl font-light text-gray-400 hover:text-black transition-colors"
              >
                CLASSIC
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="group">
                <div className="aspect-square bg-gray-100 mb-6 relative overflow-hidden">
                  {/* Product Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 bg-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                      </div>
                      <p className="text-sm">{product.image}</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      href={`/product/${product.id}`}
                      className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors"
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-sm tracking-wide mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              JOIN OUR SECURITY COLLECTIVE
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lifestyle Images */}
            <div className="aspect-[4/5] bg-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">The uniform of</h3>
                  <h4 className="text-lg font-light italic">the protected</h4>
                </div>
              </div>
            </div>

            <div className="aspect-[4/5] bg-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
            </div>

            <div className="aspect-[4/5] bg-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-900">
          {/* Video placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
              </div>
              <p>Lifestyle Video Background</p>
              <p className="text-sm opacity-80">BezelGuard in Action</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-sm tracking-widest mb-4">NEW ARRIVALS</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductShowcase;
