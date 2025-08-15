"use client";
import { MessageSquare } from "lucide-react";
import WhatsAppLink from "./WhatsAppLink";

interface NavWhatsAppButtonProps {
  transparent?: boolean;
}

const NavWhatsAppButton = ({ transparent = false }: NavWhatsAppButtonProps) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors text-sm font-medium";
  const transparentClasses =
    "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20";
  const solidClasses = "bg-gray-900 text-white hover:bg-gray-800";

  return (
    <WhatsAppLink
      className={`${baseClasses} ${
        transparent ? transparentClasses : solidClasses
      }`}
    >
      <MessageSquare className="w-4 h-4" />
      <span>WhatsApp</span>
    </WhatsAppLink>
  );
};

export default NavWhatsAppButton;
