import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>Contact Us - BezelGuard</title>
        <meta
          name="description"
          content="Get in touch with BezelGuard for product inquiries, technical support, or wholesale opportunities."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re here to help protect your timepieces and answer any
              questions
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  Get in Touch
                </h2>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-700 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Email Support
                      </h3>
                      <p className="text-gray-600 mb-2">
                        For general inquiries and technical support
                      </p>
                      <a
                        href="mailto:support@bezelguard.com"
                        className="text-slate-700 hover:text-slate-800 font-medium"
                      >
                        support@bezelguard.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-700 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Phone Support
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Available Monday to Friday, 9 AM - 6 PM CET
                      </p>
                      <a
                        href="tel:+41225550199"
                        className="text-slate-700 hover:text-slate-800 font-medium"
                      >
                        +41 22 555 01 99
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-700 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Headquarters
                      </h3>
                      <p className="text-gray-600">
                        BezelGuard Security Systems
                        <br />
                        Rue du Rhône 114
                        <br />
                        1204 Geneva, Switzerland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-700 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Emergency Support
                      </h3>
                      <p className="text-gray-600 mb-2">
                        24/7 theft alert response system
                      </p>
                      <a
                        href="tel:+41225550911"
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        +41 22 555 09 11
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Inquiries */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Business Inquiries</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <strong>Wholesale & Partnerships:</strong>
                      <br />
                      <a
                        href="mailto:wholesale@bezelguard.com"
                        className="text-slate-700"
                      >
                        wholesale@bezelguard.com
                      </a>
                    </div>
                    <div>
                      <strong>Press & Media:</strong>
                      <br />
                      <a
                        href="mailto:press@bezelguard.com"
                        className="text-slate-700"
                      >
                        press@bezelguard.com
                      </a>
                    </div>
                    <div>
                      <strong>Authorized Retailers:</strong>
                      <br />
                      <a
                        href="mailto:retailers@bezelguard.com"
                        className="text-slate-700"
                      >
                        retailers@bezelguard.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-slate-700"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-slate-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-slate-700"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="technical-support">
                        Technical Support
                      </option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-slate-700 resize-vertical"
                      placeholder="Tell us about your inquiry or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-colors w-full md:w-auto"
                  >
                    SEND MESSAGE
                  </button>
                </form>

                <div className="mt-8 p-6 bg-slate-60 rounded-lg">
                  <h4 className="font-semibold mb-2 text-slate-900">
                    Response Time
                  </h4>
                  <p className="text-sm text-slate-800">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent security matters, please call our
                    emergency line.
                  </p>
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
