"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-3">
      <div className="mx-auto max-w-7xl">
        <header className="flex h-20 items-center rounded-2xl border border-white/10 bg-black/80 px-6 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-blue-500">hire</span>
              <span className="text-orange-500">loop</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="ml-auto hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-white/10" />

            <Link
              href="/login"
              className="font-medium text-violet-400 hover:text-violet-300"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle Menu"
            className="ml-auto lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col p-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-zinc-300 transition hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <div className="mt-4 border-t border-white/10 pt-4">
                <Link
                  href="/login"
                  className="block py-3 text-violet-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="mt-2 flex justify-center rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-3 font-medium text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}