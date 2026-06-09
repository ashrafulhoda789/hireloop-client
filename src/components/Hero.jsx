"use client";

import {
    Magnifier,
    MapPin,
    Briefcase,
    Factory,
    CircleInfo,
    Star
} from "@gravity-ui/icons";
import Image from "next/image";
import { motion } from "motion/react"

export default function Hero() {

    const stats = [
        {
            icon: Briefcase,
            value: "50K",
            label: "Active Jobs",
        },
        {
            icon: Factory,
            value: "12K",
            label: "Companies",
        },
        {
            icon: CircleInfo,
            value: "2M",
            label: "Job Seekers",
        },
        {
            icon: Star,
            value: "97%",
            label: "Satisfaction Rate",
        },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center pt-32">

            {/* Glow Effect */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-indigo-700/20 blur-[180px] rounded-full" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(99,102,241,.15),transparent_60%)]" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">

                {/* Top Badge */}
                <div className="flex justify-center">
                    <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg text-xs tracking-widest text-gray-300">
                        🚀 50,000+ NEW JOBS THIS MONTH
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mt-8 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Find Your Dream Job Today
                    </h1>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                        HireLoop connects top talent with world-class companies.
                        Browse thousands of curated opportunities and land your next role faster.
                    </p>
                </div>

                {/* Search Box */}
                <div className="max-w-4xl mx-auto mt-10">
                    <form className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex flex-col md:flex-row gap-3">

                        <div className="flex items-center gap-3 flex-1 px-4">
                            <Magnifier className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Job title, skill or company"
                                className="w-full bg-transparent outline-none"
                            />
                        </div>

                        <div className="hidden md:block w-px bg-white/10" />

                        <div className="flex items-center gap-3 flex-1 px-4">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location or Remote"
                                className="w-full bg-transparent outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-xl"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {[
                        "Product Designer",
                        "Frontend Developer",
                        "AI Engineer",
                        "DevOps Engineer",
                    ].map((item) => (
                        <span
                            key={item}
                            className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/5"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Globe Area */}
                <div className="relative mt-20">

                    {/* Heading */}
                    <div className="relative z-20 text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-semibold">
                            Assisting over 15,000 job seekers
                        </h2>

                        <p className="mt-3 text-zinc-400 text-lg">
                            find their dream positions.
                        </p>
                    </div>

                    {/* Globe */}
                    <div className="relative h-87.5 md:h-125 overflow-hidden">

                        {/* Purple Glow */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-125 w-125 md:h-200 md:w-200 rounded-full bg-indigo-600/30 blur-[150px]" />

                        <Image
                            src="/images/globe.png"
                            alt="Globe"
                            fill
                            className="object-cover object-center"
                            priority
                        />

                        {/* Fade Bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent" />
                    </div>

                    {/* Stats */}
                    <div className="relative z-20 -mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 pb-10">

                        {stats.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-3xl border border-white/10 bg-[#0d0d12]/80 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(99,102,241,0.08)]  "
                                >
                                    <Icon className="h-5 w-5 text-white/70 mb-8" />

                                    <h3 className="text-4xl font-bold">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-sm text-zinc-400">
                                        {item.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}