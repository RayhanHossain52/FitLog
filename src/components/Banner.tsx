import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="mt-12">
            <div className="px-20 py-30 flex min-h-[430px] items-center justify-between gap-10 rounded-2xl bg-[#15181d]">

                {/* Left Content */}
                <div className="max-w-2xl">

                    {/* Small Heading */}
                    <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#c8ff00]">
                        WORKOUT LIBRARY
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                        TRAIN WITH INTENT.
                        <br />
                        LOG EVERY SET.
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    {/* Button */}
                    <a
                        href="#library"
                        className="btn mt-8 border-0 bg-[#c8ff00] px-8 text-black hover:bg-[#b5e600]"
                    >
                        Explore Workouts
                    </a>

                </div>

                {/* Right Image */}
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