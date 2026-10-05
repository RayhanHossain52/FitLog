import Image from "next/image";
import { WorkoutTypes } from "@/types/WorkoutTypes";
import { CiClock2 } from "react-icons/ci";
import { PiFireSimpleFill } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";

type WorkoutCardProps = {
    workout: WorkoutTypes;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <div className="overflow-hidden rounded-xl border border-[#25282e] bg-[#15171c]">

            {/* Image */}
            <figure className="h-[250px] w-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={740}
                    height={400}
                    className="h-full w-full object-cover"
                />
            </figure>


            <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h2 className="text-lg font-extrabold uppercase text-white">
                    {workout.name}
                </h2>


                <p className="mt-1 text-xs text-gray-500">
                    {workout.equipment}
                </p>

                {/* Divider */}
                <div className="my-3 border-t border-[#25282e]" />

                {/* Status */}
                <div className="flex items-center gap-4 text-xs text-gray-400">

                    <span className="flex items-center gap-1">
                        <CiClock2 />
                        {workout.duration} min
                    </span>
 
                    <span className="flex items-center gap-1">
                        <PiFireSimpleFill />
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <FaRegStar />
                        {workout.rating}
                    </span>

                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;