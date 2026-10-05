import Image from "next/image";
import logo from "@/assets/logo.png"
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-[#292c32] bg-[#0d0f12]">
            <div className="mx-auto flex max-w-320 items-center justify-between px-5 py-8">


                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="FITLOG"
                        className="h-6 w-auto"
                    />

                    <span className="text-lg font-bold text-white">
                        FITLOG
                    </span>
                </div>

                <div className="text-sm text-gray-400 flex items-center gap-1">
                    <FaRegCopyright />
                    <p>
                     2026 FitLog — Workout Library. Train hard, log honest.
                </p>
                </div>
                

            </div>
        </footer>
    );
};

export default Footer;