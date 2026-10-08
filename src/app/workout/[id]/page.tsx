import AddPlanButton from "@/components/AddPlanButton";
import SaveLater from "@/components/SaveLater";
import { WorkoutTypes } from "@/types/WorkoutTypes";
import Image from "next/image";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const page = async ({ params }: Props) => {
    const { id } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const workout: WorkoutTypes = await res.json();

    return (
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-stretch gap-8 px-4 pb-16 sm:px-5 lg:mt-20 lg:grid-cols-2 lg:gap-10">

            <div className="h-[350px] overflow-hidden rounded-2xl sm:h-[450px] lg:h-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={588}
                    height={735}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-col">

                <h1 className="text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                    {workout.name}
                </h1>

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

                <div className="mt-5 overflow-hidden rounded-xl border border-[#292c32] bg-[#15181d]">

                    <div className="flex items-center justify-between gap-4 border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Equipment
                        </span>

                        <span className="text-right text-sm text-gray-300">
                            {workout.equipment}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Difficulty
                        </span>

                        <span className="text-right text-sm text-gray-300">
                            {workout.difficulty}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Sets
                        </span>

                        <span className="text-right text-sm text-gray-300">
                            {workout.sets}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Reps
                        </span>

                        <span className="text-right text-sm text-gray-300">
                            {workout.reps}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Duration
                        </span>

                        <span className="text-right text-sm text-gray-300">
                            {workout.duration} min
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-[#292c32] px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Calories
                        </span>

                        <span className="text-right text-sm text-gray-300">
                            {workout.caloriesBurned} kcal
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 px-4 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                            Rating
                        </span>

                        <span className="text-right text-sm text-gray-300">
                            {workout.rating}
                        </span>
                    </div>

                </div>

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

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                    <AddPlanButton workout={workout} />

                    <SaveLater workout={workout} />

                </div>

            </div>

        </div>
    );
};

export default page;