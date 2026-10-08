import { ExerciseContext } from "@/context/WorkoutContext";
import { WorkoutTypes } from "@/types/WorkoutTypes";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
    FaRegClock,
    FaFire,
    FaStar,
    FaXmark,
} from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const SaveCard = ({ exercise }: { exercise: WorkoutTypes }) => {

    const { removeFromSaved } = useContext(ExerciseContext);

    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-[#292c32] bg-[#15181d] p-4 sm:flex-row sm:items-center">

            <Image
                src={exercise.image}
                alt={exercise.name}
                width={135}
                height={80}
                className="h-20 w-full rounded-xl object-cover sm:w-[135px]"
            />

            <div className="flex-1">

                <h2 className="text-base font-extrabold uppercase text-white">
                    {exercise.name}
                </h2>

                <p className="text-xs text-gray-500">
                    {exercise.equipment}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400 sm:gap-4">

                    <span className="flex items-center gap-1">
                        <FaRegClock className="text-[#c8ff00]" />
                        {exercise.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <FaFire className="text-[#c8ff00]" />
                        {exercise.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <FaStar className="text-[#c8ff00]" />
                        {exercise.rating}
                    </span>

                </div>

            </div>

            <div className="flex items-center gap-2 sm:gap-5">

                <Link href={`/workout/${exercise.id}`}>
                    <button
                        className="cursor-pointer rounded-full border border-[#343943] px-3 py-2 text-xs text-white hover:bg-[#20242c] sm:px-4"
                    >
                        View Details
                    </button>
                </Link>

                <button
                    onClick={() => {
                        removeFromSaved(exercise.id);

                        toast.success("Removed from Saved", {
                            position: "top-right",
                            autoClose: 700,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                        });
                    }}
                    className="cursor-pointer text-gray-500 hover:text-white"
                >
                    <FaXmark />
                </button>

            </div>

        </div>
    );
};

export default SaveCard;