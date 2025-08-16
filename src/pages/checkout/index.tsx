import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Cart state - normally this would come from a global state manager
  const [cartItems, setCartItems] = useState([
    {
      id: "classic-stealth",
      name: "BezelGuard Classic - Stealth Black",
      price: 24.99,
      quantity: 1,
      image: "Product image",
      selectedFor: "Rolex Submariner Black",
    },
  ]);

  // Form states
  const [customerInfo, setCustomerInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const promoDiscount = promoApplied ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal + shipping - promoDiscount;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "bezelguard10") {
      setPromoApplied(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const orderId = `BG${Date.now()}`;
      router.push(`/order-confirmation/${orderId}`);
    }, 2000);
  };

  const steps = [
    { id: 1, name: "Cart", completed: currentStep > 1 },
    { id: 2, name: "Information", completed: currentStep > 2 },
    { id: 3, name: "Payment", completed: currentStep > 3 },
  ];

  return (
    <>
      <Head>
        <title>Checkout - BezelGuard</title>
        <meta name="description" content="Complete your BezelGuard purchase" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step.id
                          ? "bg-slate-700 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step.completed ? "✓" : step.id}
                    </div>
                    <span
                      className={`ml-3 text-sm font-medium ${
                        currentStep >= step.id
                          ? "text-slate-700"
                          : "text-gray-500"
                      }`}
                    >
                      {step.name}
                    </span>
                    {index < steps.length - 1 && (
                      <div className="w-16 h-px bg-gray-300 mx-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  {/* Step 1: Cart Review */}
                  {currentStep === 1 && (
                    <div>
                      <h2 className="text-2xl font-light text-gray-900 mb-8">
                        Review Your Order
                      </h2>

                      <div className="space-y-6">
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-4 pb-6 border-b border-gray-100"
                          >
                            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                                <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
                              </div>
                            </div>

                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">
                                {item.name}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                Perfect for: {item.selectedFor}
                              </p>
                              <div className="flex items-center mt-2">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                  -
                                </button>
                                <span className="mx-3 font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <div className="text-right">
                              <p className="font-medium text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <button
                                onClick={() => updateQuantity(item.id, 0)}
                                className="text-sm text-red-600 hover:text-red-700 mt-1"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}

                        {cartItems.length === 0 && (
                          <div className="text-center py-12">
                            <p className="text-gray-600 mb-4">
                              Your cart is empty
                            </p>
                            <Link
                              href="/shop"
                              className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                            >
                              Continue Shopping
                            </Link>
                          </div>
                        )}

                        {/* Promo Code */}
                        {cartItems.length > 0 && (
                          <div className="border-t border-gray-200 pt-6">
                            <div className="flex space-x-3">
                              <input
                                type="text"
                                placeholder="Promo code"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                              />
                              <button
                                onClick={applyPromoCode}
                                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                              >
                                Apply
                              </button>
                            </div>
                            {promoApplied && (
                              <p className="text-green-600 text-sm mt-2">
                                ✓ Promo code applied: 10% off
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      {cartItems.length > 0 && (
                        <div className="mt-8">
                          <button
                            onClick={() => setCurrentStep(2)}
                            className="w-full bg-slate-700 text-white py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                          >
                            Continue to Information
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Customer Information */}
                  {currentStep === 2 && (
                    <div>
                      <h2 className="text-2xl font-light text-gray-900 mb-8">
                        Contact Information
                      </h2>

                      <form className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={customerInfo.email}
                            onChange={(e) =>
                              setCustomerInfo({
                                ...customerInfo,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              value={customerInfo.firstName}
                              onChange={(e) =>
                                setCustomerInfo({
                                  ...customerInfo,
                                  firstName: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              value={customerInfo.lastName}
                              onChange={(e) =>
                                setCustomerInfo({
                                  ...customerInfo,
                                  lastName: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={customerInfo.phone}
                            onChange={(e) =>
                              setCustomerInfo({
                                ...customerInfo,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                          />
                        </div>

                        <h3 className="text-xl font-light text-gray-900 mt-12 mb-6">
                          Shipping Address
                        </h3>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            value={shippingInfo.address}
                            onChange={(e) =>
                              setShippingInfo({
                                ...shippingInfo,
                                address: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City
                            </label>
                            <input
                              type="text"
                              value={shippingInfo.city}
                              onChange={(e) =>
                                setShippingInfo({
                                  ...shippingInfo,
                                  city: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              State
                            </label>
                            <input
                              type="text"
                              value={shippingInfo.state}
                              onChange={(e) =>
                                setShippingInfo({
                                  ...shippingInfo,
                                  state: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              ZIP Code
                            </label>
                            <input
                              type="text"
                              value={shippingInfo.zipCode}
                              onChange={(e) =>
                                setShippingInfo({
                                  ...shippingInfo,
                                  zipCode: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                              required
                            />
                          </div>
                        </div>

                        <div className="flex space-x-4 mt-8">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            className="flex-1 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Back to Cart
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(3)}
                            className="flex-1 bg-slate-700 text-white py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                          >
                            Continue to Payment
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Step 3: Payment */}
                  {currentStep === 3 && (
                    <div>
                      <h2 className="text-2xl font-light text-gray-900 mb-8">
                        Payment
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            value={paymentInfo.cardNumber}
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                cardNumber: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            value={paymentInfo.cardName}
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                cardName: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              value={paymentInfo.expiryDate}
                              onChange={(e) =>
                                setPaymentInfo({
                                  ...paymentInfo,
                                  expiryDate: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              value={paymentInfo.cvv}
                              onChange={(e) =>
                                setPaymentInfo({
                                  ...paymentInfo,
                                  cvv: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
                              required
                            />
                          </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-300 rounded-lg p-4 mt-8">
                          <h4 className="font-medium text-slate-900 mb-2">
                            Security Guarantee
                          </h4>
                          <p className="text-sm text-slate-800">
                            Your payment information is encrypted and secure. We
                            never store your card details.
                          </p>
                        </div>

                        <div className="flex space-x-4 mt-8">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="flex-1 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Back to Information
                          </button>
                          <button
                            type="submit"
                            disabled={isProcessing}
                            className="flex-1 bg-slate-700 text-white py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isProcessing
                              ? "Processing..."
                              : `Complete Order - $${total.toFixed(2)}`}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-slate-700 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    {promoApplied && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">Discount (10%)</span>
                        <span className="font-medium text-green-600">
                          -${promoDiscount.toFixed(2)}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    {subtotal < 50 && (
                      <p className="text-xs text-gray-500">
                        Add ${(50 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    )}

                    <div className="flex justify-between text-lg font-medium pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>30-day money back guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center mr-2">
                        <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                      </div>
                      <span>Free worldwide shipping over $50</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span>1-year warranty included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
