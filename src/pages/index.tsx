import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>

      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-white">
        {/* Main hero content */}
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-gray-500 mb-8">
              Protection. Redefined.
            </p>
          </div>

          <div className="animate-on-scroll mb-8">
            <h1 className="text-6xl md:text-7xl font-thin tracking-tight text-gray-900 leading-tight mb-4">
              BEZELGUARD
            </h1>
            <h2 className="text-6xl md:text-7xl font-thin tracking-tight text-slate-700 leading-tight">
              OUT NOW.
            </h2>
          </div>

          <div className="animate-on-scroll mb-12">
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              The invisible guardian for your timepiece.
              <br />
              Simple. Elegant. Effective.
            </p>
          </div>

          <div className="animate-on-scroll">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-gray-900 text-white px-8 py-4 font-light tracking-wide hover:bg-gray-800 transition-colors"
              >
                SHOP NOW
              </Link>
              <Link
                href="/technology"
                className="border border-gray-300 text-gray-900 px-8 py-4 font-light tracking-wide hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Quote Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="animate-on-scroll mb-20">
            <blockquote className="text-4xl md:text-5xl font-light text-slate-800 leading-[1.3] italic">
              &quot;Think of it as a guardian angel
              <br />
              <span className="text-slate-700">for your timepiece.&quot;</span>
            </blockquote>
          </div>

          <div className="animate-on-scroll">
            <p className="text-sm font-medium tracking-[0.2em] text-slate-500 mb-16 uppercase">
              Featured In
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-60">
              <div className="flex items-center justify-center">
                <span className="text-3xl font-light text-slate-700 tracking-wide">
                  GQ
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-light text-slate-700 tracking-wide">
                  Bloomberg
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-light text-slate-700 tracking-wide">
                  Forbes
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-light text-slate-700 tracking-wide">
                  Hodinkee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Product Visual */}
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="w-48 h-48 bg-slate-900 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                        <div className="w-32 h-32 bg-slate-700 rounded-full relative shadow-inner">
                          <div className="absolute top-3 right-3 w-4 h-4 bg-slate-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-slate-600 rounded-full opacity-70 animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-slate-400 rounded-full opacity-50"></div>
                    </div>
                    <p className="text-slate-600 font-light text-lg">
                      BezelGuard Classic
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Content */}
            <div className="animate-on-scroll space-y-10 order-1 lg:order-2">
              <div>
                <h2 className="text-5xl md:text-6xl font-thin text-slate-900 leading-tight mb-6">
                  One Device.
                  <br />
                  <span className="text-slate-700">Every Watch.</span>
                </h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                  Universal compatibility meets sophisticated design. BezelGuard
                  works seamlessly with any timepiece, from vintage classics to
                  modern marvels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-3 h-3 bg-slate-700 rounded-full"></div>
                  <span className="text-lg text-slate-700 font-light">
                    Invisible when worn
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-3 h-3 bg-slate-700 rounded-full"></div>
                  <span className="text-lg text-slate-700 font-light">
                    5-second installation
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-3 h-3 bg-slate-700 rounded-full"></div>
                  <span className="text-lg text-slate-700 font-light">
                    Emergency release system
                  </span>
                </div>
              </div>

              <div className="pt-8">
                <div className="flex items-center space-x-8 mb-8">
                  <div>
                    <span className="text-4xl font-thin text-slate-900">
                      $24.99
                    </span>
                    <span className="text-lg text-slate-500 ml-3">
                      + shipping
                    </span>
                  </div>
                </div>
                <Link
                  href="/shop"
                  className="inline-block px-10 py-4 bg-slate-700 text-white font-light text-lg tracking-wide transition-all duration-500 hover:bg-slate-800 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll text-center mb-24">
            <h2 className="text-5xl font-thin text-slate-900 mb-8">
              Engineered for Excellence
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
              Every detail carefully considered. Every feature purposefully
              designed for the modern collector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="animate-on-scroll text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-10 h-10 bg-slate-700 rounded-xl"></div>
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-6">
                Universal Fit
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-lg">
                Compatible with any watch brand, size, or strap material. No
                modifications required to your precious timepiece.
              </p>
            </div>

            <div
              className="animate-on-scroll text-center group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-10 h-10 bg-slate-300 rounded-xl"></div>
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-6">
                Invisible Design
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-lg">
                Nearly undetectable when worn. Preserves the original aesthetic
                and elegance of your timepiece.
              </p>
            </div>

            <div
              className="animate-on-scroll text-center group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl"></div>
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-6">
                Proven Security
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-lg">
                Advanced locking mechanism tested and approved by security
                professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll text-center mb-24">
            <h2 className="text-5xl font-thin text-slate-900 mb-8">
              Trusted by Collectors
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Join thousands who protect their timepieces with BezelGuard
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <div className="glass-effect p-12 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <p className="text-xl text-slate-700 font-light leading-relaxed italic mb-8">
                  &quot;I can finally wear my vintage Submariner in the city without
                  constantly looking over my shoulder. BezelGuard is invisible
                  but gives me complete peace of mind.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-full mr-6"></div>
                  <div>
                    <p className="font-light text-slate-900 text-lg">
                      Marcus Chen
                    </p>
                    <p className="text-slate-500">Watch Collector, NYC</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="animate-on-scroll"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="glass-effect p-12 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <p className="text-xl text-slate-700 font-light leading-relaxed italic mb-8">
                  &quot;As a dealer, I recommend BezelGuard to all my clients. It&apos;s
                  the most elegant security solution I&apos;ve seen for luxury
                  timepieces.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-full mr-6"></div>
                  <div>
                    <p className="font-light text-slate-900 text-lg">
                      Sarah Williams
                    </p>
                    <p className="text-slate-500">Authorized Dealer, London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-on-scroll mb-12">
            <h2 className="text-5xl md:text-6xl font-thin leading-tight mb-8">
              Ready to Protect
              <br />
              <span className="text-slate-400">Your Investment?</span>
            </h2>
            <p className="text-xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of collectors who trust BezelGuard to protect their
              most precious timepieces with invisible, sophisticated security.
            </p>
          </div>

          <div className="animate-on-scroll">
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/shop"
                className="group px-12 py-5 bg-slate-700 text-white font-light text-lg tracking-wide transition-all duration-500 hover:bg-slate-800 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="inline-block transition-transform group-hover:translate-x-2">
                  START PROTECTING TODAY
                </span>
              </Link>
              <Link
                href="/about"
                className="px-12 py-5 border-2 border-slate-500 text-slate-300 font-light text-lg tracking-wide transition-all duration-500 hover:border-white hover:text-white hover:shadow-xl transform hover:-translate-y-1"
              >
                LEARN OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
