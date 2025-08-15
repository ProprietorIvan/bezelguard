"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import WhatsAppLink from "./WhatsAppLink";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [typingText, setTypingText] = useState("");
  const responseMessage = "We respond within 4 minutes on average";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
      let currentChar = 0;

      const typeInterval = setInterval(() => {
        if (currentChar < responseMessage.length) {
          setTypingText(responseMessage.substring(0, currentChar + 1));
          currentChar++;
        } else {
          clearInterval(typeInterval);

          setTimeout(() => {
            setShowMessage(false);
            setTimeout(() => {
              setTypingText("");
              setShowMessage(true);
            }, 8000);
          }, 10000);
        }
      }, 50);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(messageTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {showMessage && typingText && (
        <div className="fixed bottom-20 right-6 z-[9999] bg-white text-gray-700 p-3 rounded-lg shadow-lg min-w-[250px] max-w-[300px] animate-fadeIn">
          <span className="block">{typingText}</span>
        </div>
      )}
      <div className="fixed bottom-4 right-4 z-50">
        <WhatsAppLink>
          <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110">
            <FaWhatsapp size={40} />
          </div>
        </WhatsAppLink>
      </div>
    </>
  );
};

export default WhatsAppButton;
