import React from "react";
import { Truck, RefreshCw, PenTool, MapPin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "FREE SHIPPING OVER $50",
      subtitle: "Express shipping available",
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "SATISFIED OR REFUNDED",
      subtitle: "Easy 14-days returns",
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "DESIGNED FOR SECURITY",
      subtitle: "The ultimate in comfort and protection",
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "MADE WITH PRECISION",
      subtitle: "Meticulously crafted from premium materials",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6 text-gray-600">
                {feature.icon}
              </div>
              <h3 className="font-bold text-sm tracking-wide mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
