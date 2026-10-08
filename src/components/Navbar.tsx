"use client";
import logo from "@/assets/logo.png"
import { ExerciseContext } from "@/context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

    const { addPlan, saveLater } = useContext(ExerciseContext);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#292c32] bg-[#0d0f12] py-1">
            <div className="navbar mx-auto max-w-320 bg-[#0d0f12] px-2 sm:px-4 shadow-none">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li><Link href="/">Workouts</Link></li>
                            <li><Link href="/my-plan">My Plan</Link></li>
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="FITLOG"
                            className="h-7 w-auto"
                        />

                        <span className="text-xl font-bold">
                            FITLOG
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <div className="flex items-center gap-2">

                        <Link
                            href="/"
                            className={`rounded-xl px-4 py-2 text-sm font-semibold ${pathname === "/"
                                ? "bg-[#191c21] text-[#c8ff00]"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            className={`rounded-xl px-4 py-2 text-sm font-semibold ${pathname === "/my-plan"
                                ? "bg-[#191c21] text-[#c8ff00]"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            My Plan
                        </Link>

                    </div>
                </div>

                <div className="navbar-end">
                    <div className="flex items-center gap-3 sm:gap-6 px-1 sm:px-5 py-2 sm:py-3">

                        <Link
                            href="/my-plan"
                            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-white"
                        >
                            <span>Plan</span>

                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8ff00] px-1.5 text-xs font-bold text-black">
                                {addPlan.length}
                            </span>
                        </Link>

                        <Link
                            href="/my-plan"
                            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-white"
                        >
                            <span>Saved</span>

                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-400 px-1.5 text-xs">
                                {saveLater.length}
                            </span>
                        </Link>

                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;