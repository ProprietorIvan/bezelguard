import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function News() {
  const newsArticles = [
    {
      id: "luxury-watch-theft-rise-2024",
      title: "Luxury Watch Theft Rises 45% in Major Cities Worldwide",
      excerpt:
        "New report reveals alarming increase in high-end timepiece thefts across London, New York, and Paris, with Rolex and Patek Philippe being primary targets.",
      date: "March 15, 2024",
      category: "Security Report",
      image: "Security analytics image placeholder",
    },
    {
      id: "bezelguard-v2-launch",
      title: "BezelGuard V2: Enhanced Protection with 50% Faster Response",
      excerpt:
        "Our latest generation security system features improved sensors, longer battery life, and new stealth mode for ultimate discretion.",
      date: "March 10, 2024",
      category: "Product Update",
      image: "BezelGuard V2 product image placeholder",
    },
    {
      id: "collector-spotlight-marcus",
      title: "Collector Spotlight: How Marcus Protected His €500K Collection",
      excerpt:
        "Watch dealer Marcus Thompson shares his experience using BezelGuard to secure his rare vintage Patek Philippe collection during international travel.",
      date: "March 5, 2024",
      category: "Customer Story",
      image: "Marcus with watch collection placeholder",
    },
    {
      id: "watch-security-tips",
      title: "7 Essential Security Tips Every Watch Collector Should Know",
      excerpt:
        "Expert advice on protecting your timepieces beyond just using security devices - from insurance to safe storage and travel precautions.",
      date: "February 28, 2024",
      category: "Security Guide",
      image: "Security tips infographic placeholder",
    },
    {
      id: "partnership-hodinkee",
      title: "BezelGuard Partners with Leading Watch Publications",
      excerpt:
        "New collaborations with Hodinkee, WatchTime, and Revolution to educate collectors about modern watch security challenges.",
      date: "February 20, 2024",
      category: "Partnership",
      image: "Partnership announcement placeholder",
    },
    {
      id: "trade-show-baselworld",
      title:
        "BezelGuard to Showcase Revolutionary Tech at Watches & Wonders 2024",
      excerpt:
        "Visit our booth at the world's premier watch fair to see live demonstrations of our latest anti-theft technology.",
      date: "February 15, 2024",
      category: "Events",
      image: "Trade show booth placeholder",
    },
  ];

  const categories = [
    "All",
    "Security Report",
    "Product Update",
    "Customer Story",
    "Security Guide",
    "Partnership",
    "Events",
  ];

  return (
    <>
      <Head>
        <title>News & Updates - BezelGuard</title>
        <meta
          name="description"
          content="Stay updated with the latest news on watch security, BezelGuard product updates, and insights from the luxury timepiece community."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              News & Updates
            </h1>
            <p className="text-xl leading-relaxed">
              Stay informed about watch security, product innovations, and
              industry insights
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-slate-900 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-sm font-medium text-slate-700 mb-4 tracking-wide uppercase">
                Featured Story
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded"></div>
                      </div>
                      <p>Featured article image</p>
                      <p className="text-sm">Security analytics dashboard</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">
                    {newsArticles[0].date} • {newsArticles[0].category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {newsArticles[0].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {newsArticles[0].excerpt}
                  </p>
                  <Link
                    href={`/news/${newsArticles[0].id}`}
                    className="bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition-colors inline-block"
                  >
                    READ FULL ARTICLE
                  </Link>
                </div>
              </div>
            </div>

            {/* Article Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <article key={article.id} className="group">
                  <div className="bg-gray-100 aspect-video rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center text-gray-600">
                        <div className="w-12 h-12 bg-slate-700 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded"></div>
                        </div>
                        <p className="text-sm">{article.image}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                    {article.date} • {article.category}
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-slate-700 transition-colors">
                    <Link href={`/news/${article.id}`}>{article.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/news/${article.id}`}
                    className="text-slate-700 hover:text-slate-800 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-16">
              <button className="border border-gray-300 text-gray-700 px-8 py-3 font-medium hover:bg-gray-50 transition-colors">
                LOAD MORE ARTICLES
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8 text-gray-300">
              Get the latest security alerts, product updates, and watch
              protection insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-900 rounded-none focus:outline-none"
              />
              <button className="bg-slate-700 text-white px-8 py-3 font-medium hover:bg-slate-800 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
