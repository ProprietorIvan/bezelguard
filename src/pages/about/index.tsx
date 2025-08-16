import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - BezelGuard</title>
        <meta
          name="description"
          content="Learn about the passionate watch collectors behind BezelGuard and our mission to protect luxury timepieces from theft."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Born from passion, driven by necessity
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
                              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    The Founders
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
                    We are founders who are surprised this did not exist. As watch enthusiasts, 
                    we couldn&apos;t believe there wasn&apos;t a simple, elegant solution to protect 
                    luxury timepieces from theft. So we created one.
                  </p>
                </div>

                              <div className="bg-gray-50 p-8 rounded-lg mb-16">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    The Problem
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Watch theft is a growing problem in major cities worldwide. 
                    Luxury timepieces are easy targets due to their high value and 
                    the vulnerability of traditional watch clasps.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We realized there had to be a better way to protect these 
                    valuable pieces while still being able to wear and enjoy them daily.
                  </p>
                </div>

                              <div className="text-center mb-16">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    The Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
                    BezelGuard is our answer to this problem. A simple, affordable, 
                    and effective way to protect your timepiece without compromising 
                    on style or comfort.
                  </p>
                </div>

                              <div className="text-center py-16 bg-gray-50 text-gray-900 rounded-lg">
                  <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                  <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                    To make watch protection accessible and affordable for everyone. 
                    Every watch deserves to be worn with confidence.
                  </p>
                </div>

                              <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gray-600 mb-2">
                      $24.99
                    </div>
                    <p className="text-gray-600">Affordable Protection</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-600 mb-2">
                      Simple
                    </div>
                    <p className="text-gray-600">Easy to Use</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-600 mb-2">
                      Effective
                    </div>
                    <p className="text-gray-600">Real Protection</p>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
