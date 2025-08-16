import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does BezelGuard attach to my watch?",
      answer:
        "BezelGuard uses a universal clip mechanism that works with any watch band or case. Simply position it on your watch and press until it clicks into place. No tools or modifications required.",
    },
    {
      question: "Will BezelGuard damage my watch?",
      answer:
        "No, BezelGuard is designed to be completely safe for your timepiece. It uses soft contact points and doesn't require any permanent modifications to your watch.",
    },
    {
      question: "What if I need to remove BezelGuard quickly?",
      answer:
        "Each BezelGuard comes with a personal release method that allows for quick removal in emergency situations while maintaining security against theft.",
    },
    {
      question: "Does it work with all watch brands?",
      answer:
        "Yes, BezelGuard is designed to be universally compatible with all watch brands and sizes, from 28mm to 50mm case diameters.",
    },
    {
      question: "How effective is BezelGuard against theft?",
      answer:
        "BezelGuard is designed as a deterrent that adds crucial seconds to the removal process, making your watch a less attractive target for opportunistic thieves.",
    },
    {
      question: "What's included in the package?",
      answer:
        "Each BezelGuard package includes the security device, detailed installation instructions, and a compact carrying case for when not in use.",
    },
    {
      question: "Can I wear BezelGuard while swimming or showering?",
      answer:
        "BezelGuard is water-resistant and can handle daily activities. However, we recommend removing it before swimming or showering to maintain the device's longevity.",
    },
    {
      question: "What if BezelGuard doesn't fit my watch?",
      answer:
        "We offer a 30-day return policy. If BezelGuard doesn't fit your specific watch model, contact our support team for a full refund or alternative solution.",
    },
  ];

  const supportCategories = [
    {
      title: "Installation Help",
      description:
        "Step-by-step guides for installing BezelGuard on different watch types",
      icon: "🔧",
      link: "/support/installation",
    },
    {
      title: "Compatibility Check",
      description: "Check if BezelGuard works with your specific watch model",
      icon: "✅",
      link: "/support/compatibility",
    },
    {
      title: "Returns & Exchanges",
      description: "Information about our return policy and exchange process",
      icon: "↩️",
      link: "/support/returns",
    },
    {
      title: "Warranty",
      description: "Learn about your BezelGuard warranty coverage",
      icon: "🛡️",
      link: "/support/warranty",
    },
  ];

  return (
    <>
      <Head>
        <title>Support - BezelGuard</title>
        <meta
          name="description"
          content="Get support for BezelGuard. FAQ, installation guides, compatibility information, and customer service."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about using BezelGuard.
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
              How Can We Help?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportCategories.map((category, index) => (
                <Link key={index} href={category.link} className="group">
                  <div className="bg-gray-50 p-8 rounded-lg text-center hover:bg-gray-100 transition-colors">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-medium mb-3 text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-100"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="text-gray-400 text-xl">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-light mb-6 text-gray-900">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our support team is here to help with any questions or concerns.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-medium mb-3 text-gray-900">
                    Email Support
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    support@bezelguard.com
                  </p>
                  <p className="text-gray-500 text-xs">
                    Response within 24 hours
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-3 text-gray-900">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Available on our website
                  </p>
                  <p className="text-gray-500 text-xs">
                    Mon-Fri, 9 AM - 6 PM EST
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-3 text-gray-900">
                    Phone Support
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-gray-500 text-xs">
                    Mon-Fri, 9 AM - 6 PM EST
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 font-light hover:bg-gray-800 transition-colors inline-block"
              >
                CONTACT SUPPORT
              </Link>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
              Additional Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-medium mb-4 text-gray-900">User Manual</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Complete installation and usage instructions for all
                  BezelGuard models.
                </p>
                <Link
                  href="/manual.pdf"
                  className="text-slate-700 hover:text-slate-800 text-sm font-medium"
                >
                  Download PDF →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-medium mb-4 text-gray-900">
                  Video Tutorials
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Step-by-step video guides for installation and
                  troubleshooting.
                </p>
                <Link
                  href="/tutorials"
                  className="text-slate-700 hover:text-slate-800 text-sm font-medium"
                >
                  Watch Videos →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-medium mb-4 text-gray-900">
                  Community Forum
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Connect with other BezelGuard users and share experiences.
                </p>
                <Link
                  href="/community"
                  className="text-slate-700 hover:text-slate-800 text-sm font-medium"
                >
                  Join Forum →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
