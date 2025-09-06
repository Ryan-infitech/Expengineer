import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Camera, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang" },
    { path: "/people", label: "Anggota" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-4 py-2 sm:py-4">
        {" "}
        {/* Reduced padding for mobile */}
        <div className="flex items-center justify-between">
          {/* Brand + Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="flex items-center gap-1 sm:gap-2 text-lg sm:text-xl font-bold hover:text-primary transition-colors"
            >
              <img
                src="/logo.jpg"
                alt="Expenginer Logo"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
              <span>Expenginer</span>
            </Link>
            <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg p-1">
              <ThemeToggle />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg backdrop-blur-md border border-white/20 dark:border-white/10 transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 ${
                  location.pathname === item.path
                    ? "text-primary font-medium bg-white/20 dark:bg-white/10"
                    : "text-muted-foreground bg-white/10 dark:bg-black/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Button - reduced size */}
            <button
              className="md:hidden p-1.5 sm:p-2 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 dark:border-white/10 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg backdrop-blur-md border border-white/20 dark:border-white/10 transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 ${
                    location.pathname === item.path
                      ? "text-primary font-medium bg-white/20 dark:bg-white/10"
                      : "text-muted-foreground bg-white/10 dark:bg-black/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
