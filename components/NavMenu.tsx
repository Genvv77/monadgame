"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Home, BookOpen, Puzzle, Trophy } from "lucide-react";

type NavMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu: React.FC<NavMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {/* 🟪 Menu Button: match wallet height */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="h-[40px] px-3 bg-zinc-900 rounded-lg text-white flex items-center justify-center hover:scale-105 hover:shadow-xl transition"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* 🟣 Dropdown aligned to wallet's left edge */}
      <div
        className={`absolute top-12 z-50 bg-purple-600/80 backdrop-blur-md rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ right: 0, width: 'calc(100% + 137px)' }}
      >
        <ul className="text-white text-base sm:text-lg font-medium tracking-widest space-y-4 font-sans">
          <li className="flex items-center space-x-2 hover:text-purple-300">
            <Home className="w-5 h-5" /> <span>Home</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-purple-300">
            <BookOpen className="w-5 h-5" /> <span>Rules</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-purple-300">
            <Puzzle className="w-5 h-5" /> <span>Riddles</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-purple-300">
            <Trophy className="w-5 h-5" /> <span>Winners</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;










