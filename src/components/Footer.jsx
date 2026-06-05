import Link from "next/link";

import {
    LogoFacebook,
    LogoLinkedin,
    LogoGithub,
} from "@gravity-ui/icons";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <Link href="/">
                                <h2 className="text-4xl font-bold">
                                    <span className="text-blue-500">hire</span>
                                    <span className="text-orange-500">loop</span>
                                </h2>
                            </Link>

                            <p className="mt-8 max-w-xs text-sm leading-8 text-zinc-400">
                                The AI-native career platform. Built for people who
                                take their work seriously.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-3">
                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 transition-all hover:bg-violet-600 hover:text-white"
                            >
                                <LogoFacebook className="h-5 w-5" />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-600 text-white transition-all hover:opacity-90"
                            >
                                <LogoGithub className="h-5 w-5" />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 transition-all hover:bg-violet-600 hover:text-white"
                            >
                                <LogoLinkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-violet-500">
                            Product
                        </h3>

                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <Link href="/jobs" className="hover:text-white">
                                    Job Discovery
                                </Link>
                            </li>

                            <li>
                                <Link href="/ai" className="hover:text-white">
                                    Worker AI
                                </Link>
                            </li>

                            <li>
                                <Link href="/companies" className="hover:text-white">
                                    Companies
                                </Link>
                            </li>

                            <li>
                                <Link href="/salary-insights" className="hover:text-white">
                                    Salary Data
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-violet-500">
                            Navigation
                        </h3>

                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <Link href="/help-center" className="hover:text-white">
                                    Help Center
                                </Link>
                            </li>

                            <li>
                                <Link href="/career-library" className="hover:text-white">
                                    Career Library
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-violet-500">
                            Resources
                        </h3>

                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <Link href="/brand-guidelines" className="hover:text-white">
                                    Brand Guideline
                                </Link>
                            </li>

                            <li>
                                <Link href="/newsroom" className="hover:text-white">
                                    Newsroom
                                </Link>
                            </li>

                            <li>
                                <Link href="/blog" className="hover:text-white">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} HireLoop. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <Link href="/terms" className="hover:text-white">
                            Terms & Conditions
                        </Link>

                        <Link href="/privacy" className="hover:text-white">
                            Privacy Policy
                        </Link>

                        <Link href="/cookies" className="hover:text-white">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}