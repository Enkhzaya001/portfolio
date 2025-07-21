"use client";

import { useState } from "react";
import { useLanguage } from "./UserProvider";
import { Globe, ChevronDown } from "lucide-react";
import { useClickOutside } from "./UseClickOutSide";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  return (
    <div className="absolute top-4 right-6 z-50 text-sm">
      <div ref={ref} className="relative inline-block">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 px-3 py-2  transition"
        >
          <Globe className="w-4 h-4" />
          <span className="uppercase">{language}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-28  border rounded-xl shadow-md overflow-hidden">
            <button
              onClick={() => {
                setLanguage("en");
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 ${
                language === "en" ? "font-semibold text-pink-500" : ""
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                setLanguage("jp");
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 ${
                language === "jp" ? "font-semibold text-pink-500" : ""
              }`}
            >
              日本語
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
