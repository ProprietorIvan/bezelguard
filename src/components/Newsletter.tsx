import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-md">
          <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Sign up to our newsletter to receive exclusive updates on new
            BezelGuard models, security tips, and watch protection insights.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500 text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-slate-900 text-white px-8 py-3 text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
