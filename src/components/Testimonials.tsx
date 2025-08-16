import React from "react";

const testimonials = [
  {
    id: 1,
    body: "I&apos;ve been collecting vintage Rolexes for 20 years. After having my Submariner almost stolen in London, BezelGuard gives me peace of mind wherever I travel. The security is invisible but incredibly effective.",
    author: {
      name: "Marcus Thompson",
      handle: "vintagewatches",
      imageUrl: "",
      location: "London, UK",
    },
  },
  {
    id: 2,
    body: "As a watch dealer, I handle millions in timepieces daily. BezelGuard&apos;s technology is revolutionary - it&apos;s like having a personal security guard for each watch. My clients love the added protection.",
    author: {
      name: "Sarah Chen",
      handle: "luxurydealer",
      imageUrl: "",
      location: "Hong Kong",
    },
  },
  {
    id: 3,
    body: "My Patek Philippe is my most prized possession. BezelGuard lets me wear it confidently in any city. The design is so sleek, people compliment the &apos;band&apos; not knowing it&apos;s actually protecting my $100k watch.",
    author: {
      name: "Andreas Mueller",
      handle: "swisswatch",
      imageUrl: "",
      location: "Zurich, Switzerland",
    },
  },
  {
    id: 4,
    body: "I never thought I&apos;d need security for my watches until I witnessed a snatch theft in Paris. BezelGuard saved my Omega Speedmaster from a similar fate just weeks later. It actually worked!",
    author: {
      name: "Elena Rodriguez",
      handle: "omegacollector",
      imageUrl: "",
      location: "Barcelona, Spain",
    },
  },
  {
    id: 5,
    body: "The peace of mind is incredible. I can now wear my vintage Cartier Tank to evening events without constantly checking my wrist. BezelGuard is worth every penny for serious collectors.",
    author: {
      name: "David Park",
      handle: "cartierlover",
      imageUrl: "",
      location: "Seoul, South Korea",
    },
  },
  {
    id: 6,
    body: "After 30 years of collecting, I thought I knew everything about watch security. BezelGuard changed the game. It's like having insurance you can actually feel working.",
    author: {
      name: "Roberto Silva",
      handle: "watchmaster",
      imageUrl: "",
      location: "São Paulo, Brazil",
    },
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-slate-700">
            Customer Stories
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Watch Collectors Worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join thousands of collectors who protect their timepieces with
            BezelGuard
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>&quot;{testimonial.body}&quot;</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={
                        testimonial.author.imageUrl ||
                        `https://ui-avatars.com/api/?name=${testimonial.author.name}&background=1e40af&color=fff`
                      }
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        @{testimonial.author.handle} •{" "}
                        {testimonial.author.location}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
