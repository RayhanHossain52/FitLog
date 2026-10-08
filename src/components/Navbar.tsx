import logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#292c32] bg-[#0d0f12] py-1">
            <div className="navbar mx-auto max-w-320 bg-[#0d0f12] shadow-none">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Workouts</a></li>
                            <li><a>My Plan</a></li>
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
                            className="rounded-xl bg-[#191c21] px-4 py-2 text-sm font-semibold text-[#c8ff00]"
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/MyPlan"
                            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white"
                        >
                            My Plan
                        </Link>
                    </div>
                </div>
                <div className="navbar-end gap-6">

                    <Link href="/MyPlan">
                        <span>Plan</span>
                    </Link>

                    <Link href="/MyPlan">
                        <span>Saved</span>
                    </Link>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;