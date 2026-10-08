import Image from "next/image";
import banner from "@/assets/banner.png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="mt-8 sm:mt-12">
            <div className="flex min-h-[430px] flex-col items-center justify-center gap-8 rounded-2xl bg-[#15181d] px-6 py-12 sm:px-10 sm:py-16 md:flex-row md:justify-between md:gap-10 md:px-12 md:py-20 lg:px-20 lg:py-30">

                <div className="max-w-2xl">

                    <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#c8ff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        TRAIN WITH INTENT.
                        <br />
                        LOG EVERY SET.
                    </h1>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <a
                        href="#library"
                        className="btn mt-8 border-0 bg-[#c8ff00] px-8 text-black hover:bg-[#b5e600]"
                    >
                        BROWSE WORKOUTS
                        <FaArrowRight />
                    </a>

                </div>

                <div className="hidden shrink-0 md:block">
                    <Image
                        src={banner}
                        width={334}
                        height={334}
                        alt="Workout"
                        className="object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;