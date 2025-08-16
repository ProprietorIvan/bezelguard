import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Shop() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [recommendedBezelGuard, setRecommendedBezelGuard] = useState<{
    id: string;
    name: string;
    bestFor: string[];
    price: string;
  } | null>(null);

  const luxuryBrands = [
    {
      id: "rolex",
      name: "Rolex",
      logo: "ROLEX",
      models: [
        {
          id: "submariner",
          name: "Submariner",
          colors: ["Black", "Green", "Blue", "No Date"],
        },
        {
          id: "daytona",
          name: "Daytona",
          colors: ["Steel", "Gold", "Rose Gold", "Platinum"],
        },
        {
          id: "datejust",
          name: "Datejust",
          colors: ["Steel", "Two-Tone", "Gold", "Slate"],
        },
        {
          id: "gmt-master",
          name: "GMT-Master II",
          colors: ["Batman", "Pepsi", "Root Beer", "Steel"],
        },
        { id: "explorer", name: "Explorer", colors: ["Black", "Polar White"] },
      ],
    },
    {
      id: "patek-philippe",
      name: "Patek Philippe",
      logo: "PATEK PHILIPPE",
      models: [
        {
          id: "nautilus",
          name: "Nautilus",
          colors: ["Blue", "Steel", "Rose Gold", "White"],
        },
        {
          id: "aquanaut",
          name: "Aquanaut",
          colors: ["Black", "Blue", "Orange", "Khaki Green"],
        },
        {
          id: "calatrava",
          name: "Calatrava",
          colors: ["White", "Silver", "Gold", "Rose Gold"],
        },
        {
          id: "complications",
          name: "Complications",
          colors: ["White", "Blue", "Black", "Silver"],
        },
      ],
    },
    {
      id: "audemars-piguet",
      name: "Audemars Piguet",
      logo: "AP",
      models: [
        {
          id: "royal-oak",
          name: "Royal Oak",
          colors: ["Blue", "Black", "Silver", "Rose Gold"],
        },
        {
          id: "royal-oak-offshore",
          name: "Royal Oak Offshore",
          colors: ["Black", "Blue", "White", "Carbon"],
        },
        {
          id: "code-11-59",
          name: "Code 11.59",
          colors: ["Black", "Blue", "Silver", "Burgundy"],
        },
      ],
    },
    {
      id: "omega",
      name: "Omega",
      logo: "OMEGA",
      models: [
        {
          id: "speedmaster",
          name: "Speedmaster",
          colors: ["Black", "White", "Blue", "Racing"],
        },
        {
          id: "seamaster",
          name: "Seamaster",
          colors: ["Blue", "Black", "White", "Orange"],
        },
        {
          id: "constellation",
          name: "Constellation",
          colors: ["Silver", "Gold", "Two-Tone", "Black"],
        },
        {
          id: "de-ville",
          name: "De Ville",
          colors: ["White", "Black", "Silver", "Gold"],
        },
      ],
    },
    {
      id: "cartier",
      name: "Cartier",
      logo: "CARTIER",
      models: [
        {
          id: "santos",
          name: "Santos",
          colors: ["Steel", "Gold", "Two-Tone", "Black"],
        },
        {
          id: "tank",
          name: "Tank",
          colors: ["Silver", "Gold", "Rose Gold", "Black"],
        },
        {
          id: "ballon-bleu",
          name: "Ballon Bleu",
          colors: ["Steel", "Gold", "Rose Gold", "Two-Tone"],
        },
        {
          id: "panthere",
          name: "Panthère",
          colors: ["Gold", "Steel", "Two-Tone", "Diamond"],
        },
      ],
    },
    {
      id: "breitling",
      name: "Breitling",
      logo: "BREITLING",
      models: [
        {
          id: "navitimer",
          name: "Navitimer",
          colors: ["Blue", "Black", "Silver", "Bronze"],
        },
        {
          id: "superocean",
          name: "Superocean",
          colors: ["Blue", "Black", "White", "Orange"],
        },
        {
          id: "avenger",
          name: "Avenger",
          colors: ["Black", "Blue", "Silver", "Titanium"],
        },
        {
          id: "premier",
          name: "Premier",
          colors: ["Silver", "Blue", "Green", "Copper"],
        },
      ],
    },
    {
      id: "tudor",
      name: "Tudor",
      logo: "TUDOR",
      models: [
        {
          id: "black-bay",
          name: "Black Bay",
          colors: ["Black", "Blue", "Burgundy", "Bronze"],
        },
        {
          id: "pelagos",
          name: "Pelagos",
          colors: ["Blue", "Black", "Titanium"],
        },
        { id: "ranger", name: "Ranger", colors: ["Black", "Green"] },
        {
          id: "royal",
          name: "Royal",
          colors: ["Blue", "Silver", "Black", "Champagne"],
        },
      ],
    },
  ];

  const bezelGuardVariants = [
    {
      id: "classic-stealth",
      name: "BezelGuard Classic - Stealth Black",
      bestFor: ["Professional", "Dress watches", "Dark bezels"],
      price: "$24.99",
    },
    {
      id: "classic-silver",
      name: "BezelGuard Classic - Silver",
      bestFor: ["Steel watches", "Classic designs", "Silver bezels"],
      price: "$24.99",
    },
    {
      id: "premium-gold",
      name: "BezelGuard Premium - Gold Edition",
      bestFor: ["Gold watches", "Luxury pieces", "Premium finishes"],
      price: "$24.99",
    },
    {
      id: "sport-blue",
      name: "BezelGuard Sport - Ocean Blue",
      bestFor: ["Dive watches", "Sport models", "Blue accents"],
      price: "$24.99",
    },
    {
      id: "minimal-white",
      name: "BezelGuard Minimal - Arctic White",
      bestFor: ["Light dials", "Minimal designs", "Clean aesthetics"],
      price: "$24.99",
    },
  ];

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedColor) {
      // Logic to recommend the best BezelGuard based on selection
      const brand = luxuryBrands.find((b) => b.id === selectedBrand);
      const model = brand?.models.find((m) => m.id === selectedModel);

      // Recommendation logic based on brand, model, and color
      let recommended = bezelGuardVariants[0]; // default

      if (
        selectedColor.toLowerCase().includes("gold") ||
        selectedColor.toLowerCase().includes("rose gold")
      ) {
        recommended = bezelGuardVariants[2]; // Gold edition
      } else if (selectedColor.toLowerCase().includes("blue")) {
        recommended = bezelGuardVariants[3]; // Ocean Blue
      } else if (
        selectedColor.toLowerCase().includes("white") ||
        selectedColor.toLowerCase().includes("silver")
      ) {
        recommended = bezelGuardVariants[1]; // Silver
      } else if (selectedColor.toLowerCase().includes("black")) {
        recommended = bezelGuardVariants[0]; // Stealth Black
      }

      setRecommendedBezelGuard(recommended);
    }
  }, [selectedBrand, selectedModel, selectedColor]);

  return (
    <>
      <Head>
        <title>Shop BezelGuard - Find Your Perfect Protection</title>
        <meta
          name="description"
          content="Find the perfect BezelGuard for your luxury timepiece. Compatible with Rolex, Patek Philippe, Audemars Piguet, and more."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-thin tracking-tight text-gray-900 mb-6">
              Find Your Perfect
              <span className="block text-slate-700">Protection</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Select your luxury timepiece and we&apos;ll recommend the ideal
              BezelGuard
              <br />
              designed specifically for your watch&apos;s style and finish.
            </p>
          </div>
        </section>

        {/* Brand Selector */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Select Your Watch Brand
              </h2>
              <p className="text-gray-600 font-light">
                Choose from the world&apos;s most prestigious timepiece manufacturers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
              {luxuryBrands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => {
                    setSelectedBrand(brand.id);
                    setSelectedModel("");
                    setSelectedColor("");
                  }}
                  className={`group relative p-6 rounded-lg border-2 transition-all duration-300 ${
                    selectedBrand === brand.id
                      ? "border-slate-700 bg-slate-60 shadow-lg"
                      : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div className="text-center">
                    <div
                      className={`text-lg font-light tracking-wide mb-2 ${
                        selectedBrand === brand.id
                          ? "text-slate-700"
                          : "text-gray-700"
                      }`}
                    >
                      {brand.logo}
                    </div>
                    <div className="text-xs text-gray-500">{brand.name}</div>
                  </div>
                  {selectedBrand === brand.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Model Selector */}
            {selectedBrand && (
              <div className="mb-16 animate-fade-in">
                <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
                  Select Your Model
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {luxuryBrands
                    .find((b) => b.id === selectedBrand)
                    ?.models.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => {
                          setSelectedModel(model.id);
                          setSelectedColor("");
                        }}
                        className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                          selectedModel === model.id
                            ? "border-slate-700 bg-slate-60"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          {model.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {model.colors.length} color options
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {selectedModel && (
              <div className="mb-16 animate-fade-in">
                <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
                  Select Your Color
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {luxuryBrands
                    .find((b) => b.id === selectedBrand)
                    ?.models.find((m) => m.id === selectedModel)
                    ?.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                          selectedColor === color
                            ? "border-slate-700 bg-slate-700 text-white"
                            : "border-gray-300 text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Recommendation Section */}
            {recommendedBezelGuard && (
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 text-center animate-fade-in">
                <h3 className="text-3xl font-light text-gray-900 mb-6">
                  Perfect Match Found!
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Based on your{" "}
                  {luxuryBrands.find((b) => b.id === selectedBrand)?.name}{" "}
                  {
                    luxuryBrands
                      .find((b) => b.id === selectedBrand)
                      ?.models.find((m) => m.id === selectedModel)?.name
                  }{" "}
                  in {selectedColor}, we recommend:
                </p>

                <div className="bg-white rounded-xl p-8 max-w-md mx-auto shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 bg-slate-700 rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Product visualization
                      </p>
                    </div>
                  </div>

                  <h4 className="text-xl font-light text-gray-900 mb-3">
                    {recommendedBezelGuard.name}
                  </h4>

                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">Perfect for:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {recommendedBezelGuard.bestFor.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-200 text-slate-800 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-thin text-gray-900">
                      {recommendedBezelGuard.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      + shipping
                    </span>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/checkout"
                      className="block w-full bg-slate-700 text-white py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                    >
                      ADD TO CART
                    </Link>
                    <button className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-gray-400 transition-colors">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* All Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Complete Collection
              </h2>
              <p className="text-gray-600 font-light">
                Browse our full range of BezelGuard protection solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bezelGuardVariants.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Product Image</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-light text-lg mb-3 text-gray-900">
                      {product.name}
                    </h3>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Best for:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.bestFor.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-light text-gray-900">
                        {product.price}
                      </span>
                      <Link
                        href="/checkout"
                        className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800 transition-colors text-sm"
                      >
                        ADD TO CART
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-12">
              Trusted by Watch Enthusiasts Worldwide
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-300 transition-colors">
                  <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
                </div>
                <h3 className="font-medium text-gray-900 mb-4">
                  Universal Compatibility
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Works seamlessly with any luxury timepiece, from vintage
                  classics to modern innovations.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-300 transition-colors">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                </div>
                <h3 className="font-medium text-gray-900 mb-4">
                  Invisible Protection
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Nearly undetectable when worn, preserving the original
                  aesthetic of your timepiece.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-300 transition-colors">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="font-medium text-gray-900 mb-4">
                  Proven Security
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Advanced locking mechanism tested and approved by security
                  professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
