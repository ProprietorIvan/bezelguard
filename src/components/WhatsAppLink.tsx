"use client";
import { FC, MouseEvent, ReactNode } from "react";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
}

const WhatsAppLink: FC<WhatsAppLinkProps> = ({ children, className }) => {
  const WHATSAPP_LINK =
    "https://wa.me/+33675196698?text=I am reaching out in reference to a yacht charter from the Riviera Yachts website.";

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/whatsapp", {
        method: "POST",
        keepalive: true,
      });
    } catch (error) {
      console.error("Failed to send WhatsApp notification", error);
    } finally {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <a href={WHATSAPP_LINK} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default WhatsAppLink;
