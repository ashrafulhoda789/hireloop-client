"use client";

import { useState } from "react";
import {
    Bars,
    Xmark,
} from "@gravity-ui/icons";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { id: 1, name: "Browse Jobs", href: "#" },
        { id: 2, name: "Company", href: "#" },
        { id: 3, name: "Pricing", href: "#" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-5">
            <nav className="max-w-7xl mx-auto">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold">
                        <span className="text-blue-500">Hire</span>
                        <span className="text-orange-500">Loop</span>
                    </Link>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center ml-auto">

                        {/* Nav Links */}
                        <ul className="flex items-center gap-10 text-sm text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Browse Jobs
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Company
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                        </ul>

                        {/* Vertical Divider */}
                        <div className="h-6 w-px bg-white/15 mx-8" />

                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            <button className="text-sm text-gray-300 hover:text-white">
                                Sign In
                            </button>

                            <button className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-lg text-sm font-medium">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? (
                            <Xmark className="w-6 h-6" />
                        ) : (
                            <Bars className="w-6 h-6" />
                        )}
                    </button>

                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-3 backdrop-blur-xl bg-[#111]/95 border border-white/10 rounded-2xl p-6">
                        <ul className="space-y-5">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className="block text-gray-300 hover:text-white"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-3 mt-6">
                            <button className="border border-white/10 py-2 rounded-lg">
                                Sign In
                            </button>

                            <button className="bg-indigo-600 py-2 rounded-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}