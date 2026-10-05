import Image from "next/image";
import {FaRegBookmark, FaCalendarPlus} from "react-icons/fa6";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const page = async ({ params }: Props) => {
    const { id } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const workout = await res.json();

    return (
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-10 px-5 pb-16 lg:grid-cols-2">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={588}
                    height={735}
                    className="h-full max-h-[735px] w-full object-cover"
                />
            </div>

            <div className="flex flex-col">
                {/* Name */}
                <h1 className="text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
                    {workout.name}
                </h1>

                {/* Description */}
                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                    {workout.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>


                {/* Workout Information */}
                <div className="mt-5 overflow-hidden rounded-xl border border-[#292c32] bg-[#15181d]">

                    <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Equipment
                        </span>

                        <span className="text-sm text-gray-300">
                            {workout.equipment}
                        </span>
                    </div>



                    <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Difficulty
                        </span>

                        <span className="text-sm text-gray-300">
                            {workout.difficulty}
                        </span>
                    </div>



                    <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Sets
                        </span>

                        <span className="text-sm text-gray-300">
                            {workout.sets}
                        </span>
                    </div>



                    <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Reps
                        </span>

                        <span className="text-sm text-gray-300">
                            {workout.reps}
                        </span>
                    </div>



                    <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Duration
                        </span>

                        <span className="flex items-center gap-2 text-sm text-gray-300">
                            {workout.duration} min
                        </span>
                    </div>


                    <div className="flex items-center justify-between border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Calories
                        </span>

                        <span className="flex items-center gap-2 text-sm text-gray-300">
                            {workout.caloriesBurned} kcal
                        </span>
                    </div>


                    <div className="flex items-center justify-between px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Rating
                        </span>

                        <span className="flex items-center gap-2 text-sm text-gray-300">
                            {workout.rating}
                        </span>
                    </div>

                </div>


                {/* Instructions */}
                <div className="mt-6">

                    <h2 className="text-sm font-extrabold uppercase tracking-wide text-white">
                        Instructions
                    </h2>

                    <ol className="mt-3 space-y-3">
                        {workout.instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className="flex gap-3 text-sm leading-6 text-gray-400"
                            >
                                <span className="shrink-0 text-gray-500">
                                    {index + 1}.
                                </span>

                                <span>
                                    {instruction}
                                </span>
                            </li>
                        ))}
                    </ol>

                </div>


                {/* Buttons */}
                <div className="mt-7 flex flex-wrap gap-3">

                    <button className="btn border-0 bg-[#c8ff00] text-black hover:bg-[#b5e600]">
                        <FaCalendarPlus />
                        Add to today's plan
                    </button>

                    <button className="btn border border-[#343943] bg-transparent text-gray-300 hover:bg-[#191c21] hover:text-white">
                        <FaRegBookmark />
                        Save for later
                    </button>

                </div>

            </div>

        </div>
    );
};

export default page;