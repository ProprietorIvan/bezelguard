import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Shipping() {
  return (
    <>
      <Head>
        <title>Shipping & Returns - BezelGuard</title>
        <meta
          name="description"
          content="BezelGuard shipping information, returns policy, and terms."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              Shipping & Returns
            </h1>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
              <p className="mb-6">
                Free worldwide shipping on orders over $150. Express shipping
                available for urgent orders.
              </p>

              <h2 className="text-2xl font-bold mb-4">Returns Policy</h2>
              <p className="mb-6">
                14-day return policy for unused items in original packaging.
                Customer satisfaction guaranteed.
              </p>

              <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
              <p className="mb-6">
                Orders are processed within 1-2 business days. Custom orders may
                take 3-5 days.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
