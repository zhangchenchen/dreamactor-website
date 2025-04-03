"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Method", href: "/#method" },
  { name: "Videos", href: "/#video-demos" },
  { name: "Results", href: "/#results" },
  { name: "Paper", href: "https://arxiv.org/abs/2504.01724", external: true },
  { name: "GitHub", href: "https://github.com/grisoon/DreamActor-M1", external: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md py-2 shadow-md" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 animate-pulse" />
          </motion.div>
          <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
            DreamActor-M1
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="outline" className="border-purple-600 text-white hover:bg-purple-600/20">
            Try Demo
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-gray-300 hover:text-white py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
              Try Demo
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
} 