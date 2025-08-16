import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Technology() {
  const features = [
    {
      title: "Secure Lock Mechanism",
      description:
        "Advanced locking system that prevents unauthorized removal while remaining comfortable for daily wear.",
      icon: "🔒",
    },
    {
      title: "Universal Compatibility",
      description:
        "Works with any watch brand, size, or strap material. No modifications needed to your timepiece.",
      icon: "⚙️",
    },
    {
      title: "Quick Installation",
      description:
        "Attaches in seconds with our simple mounting system. No tools or expertise required.",
      icon: "⚡",
    },
    {
      title: "Discreet Design",
      description:
        "Nearly invisible when worn. Maintains the original aesthetic of your watch.",
      icon: "👁️",
    },
    {
      title: "Durable Materials",
      description:
        "Made from high-grade materials that withstand daily wear and environmental conditions.",
      icon: "💎",
    },
    {
      title: "Emergency Release",
      description:
        "Safety mechanism allows for quick removal in emergency situations while maintaining security.",
      icon: "🚨",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Attach",
      description:
        "Simply clip BezelGuard onto your watch band or case in seconds.",
    },
    {
      step: "02",
      title: "Secure",
      description:
        "The locking mechanism engages automatically, securing your timepiece.",
    },
    {
      step: "03",
      title: "Wear",
      description:
        "Enjoy your watch with confidence, knowing it's protected from theft.",
    },
    {
      step: "04",
      title: "Remove",
      description:
        "Use your personal release method to safely remove when needed.",
    },
  ];

  return (
    <>
      <Head>
        <title>Technology - BezelGuard</title>
        <meta
          name="description"
          content="Learn how BezelGuard technology works. Advanced security features, universal compatibility, and simple installation."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simple technology. Maximum protection. Invisible security.
            </p>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-light mb-6 text-gray-900">
                  Advanced Security, Simple Design
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  BezelGuard uses a proprietary locking mechanism that makes it
                  nearly impossible for thieves to quickly remove your watch,
                  while remaining completely comfortable and invisible during
                  normal wear.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our technology works with the principle that watch thieves
                  rely on speed. By adding just a few seconds to the removal
                  process, we make your watch an unattractive target compared to
                  unprotected timepieces.
                </p>
              </div>
              <div className="bg-gray-50 aspect-square rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                  </div>
                  <p className="text-lg font-light">Technology Diagram</p>
                  <p className="text-sm text-gray-500">BezelGuard mechanism</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-medium mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
              Installation Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-light text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-medium mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
              Technical Specifications
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-medium mb-6 text-gray-900">
                  Physical Properties
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Weight</span>
                    <span>2.3g</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Dimensions</span>
                    <span>12mm x 8mm x 3mm</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Material</span>
                    <span>Aircraft-grade aluminum</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Finish</span>
                    <span>Anodized coating</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-6 text-gray-900">
                  Compatibility
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Watch Brands</span>
                    <span>Universal</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Case Sizes</span>
                    <span>28mm - 50mm</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Strap Types</span>
                    <span>Leather, Metal, Rubber</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Installation</span>
                    <span>Tool-free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-8 text-gray-900">
              Safety First
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              BezelGuard is designed with safety as the top priority. Our
              emergency release mechanism ensures that you can always remove the
              device quickly in case of medical emergencies or other urgent
              situations.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-left">
              <h3 className="font-medium mb-4 text-slate-900">
                Important Safety Note
              </h3>
              <p className="text-slate-800 text-sm leading-relaxed">
                BezelGuard is a deterrent device designed to make theft more
                difficult, not impossible. It should not be relied upon as the
                sole security measure for extremely valuable timepieces. Always
                follow safe practices when wearing expensive watches in
                high-risk areas.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
