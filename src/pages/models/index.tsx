import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Models() {
  const models = [
    {
      id: "classic",
      name: "CLASSIC",
      description: "Essential protection for everyday wear",
      features: [
        "Universal compatibility",
        "Lightweight design",
        "Easy installation",
        "Discreet appearance",
      ],
      colors: ["Stealth Black", "Silver", "Arctic White"],
      price: "$24.99",
      image: "Classic model showcase",
      ideal: "Daily wear, office, casual outings",
    },
    {
      id: "sport",
      name: "SPORT",
      description: "Built for active lifestyles",
      features: [
        "Enhanced grip technology",
        "Sweat-resistant materials",
        "Quick-release safety",
        "Vibrant color options",
      ],
      colors: ["Ocean Blue", "Forest Green", "Athletic Red"],
      price: "$24.99",
      image: "Sport model showcase",
      ideal: "Fitness, outdoor activities, sports",
    },
    {
      id: "premium",
      name: "PREMIUM",
      description: "Sophisticated protection for luxury timepieces",
      features: [
        "Premium materials",
        "Refined aesthetics",
        "Enhanced security",
        "Luxury finishes",
      ],
      colors: ["Champagne Gold", "Rose Gold", "Platinum"],
      price: "$24.99",
      image: "Premium model showcase",
      ideal: "Formal events, business meetings, luxury occasions",
    },
  ];

  return (
    <>
      <Head>
        <title>Models - BezelGuard</title>
        <meta
          name="description"
          content="Explore BezelGuard models. Classic, Sport, and Premium collections designed for every lifestyle and timepiece."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              Our Models
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Three collections designed for every lifestyle and timepiece.
            </p>
          </div>
        </section>

        {/* Models Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            {models.map((model, index) => (
              <div
                key={model.id}
                className={`mb-32 ${index === models.length - 1 ? "mb-0" : ""}`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="w-24 h-24 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                          <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                        </div>
                        <p className="text-lg font-light">{model.name}</p>
                        <p className="text-sm text-gray-500">{model.image}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
                      BEZELGUARD {model.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="font-medium mb-4 text-gray-900">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {model.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 text-sm flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-medium mb-4 text-gray-900">
                        Available Colors
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {model.colors.map((color, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-medium mb-2 text-gray-900">
                        Ideal For
                      </h3>
                      <p className="text-gray-600 text-sm">{model.ideal}</p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-2xl font-light">{model.price}</p>
                        <p className="text-xs text-gray-500">+ shipping</p>
                      </div>
                      <Link
                        href={`/shop?model=${model.id}`}
                        className="bg-gray-900 text-white px-8 py-3 font-light hover:bg-gray-800 transition-colors"
                      >
                        SHOP {model.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-16">
              Model Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 font-medium text-gray-900">
                      Feature
                    </th>
                    <th className="text-center py-4 font-light text-gray-900">
                      CLASSIC
                    </th>
                    <th className="text-center py-4 font-light text-gray-900">
                      SPORT
                    </th>
                    <th className="text-center py-4 font-light text-gray-900">
                      PREMIUM
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-gray-600">Price</td>
                    <td className="py-4 text-center">$24.99</td>
                    <td className="py-4 text-center">$24.99</td>
                    <td className="py-4 text-center">$24.99</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-gray-600">
                      Universal Compatibility
                    </td>
                    <td className="py-4 text-center">✓</td>
                    <td className="py-4 text-center">✓</td>
                    <td className="py-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-gray-600">Enhanced Grip</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">✓</td>
                    <td className="py-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-gray-600">Premium Materials</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-gray-600">Color Options</td>
                    <td className="py-4 text-center">3</td>
                    <td className="py-4 text-center">3</td>
                    <td className="py-4 text-center">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
