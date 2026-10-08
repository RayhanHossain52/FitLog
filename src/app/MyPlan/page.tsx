"use client";

import PlanCard from "@/components/PlanCard";
import SaveCard from "@/components/SaveCard";
import { ExerciseContext } from "@/context/WorkoutContext";
import { WorkoutTypes } from "@/types/WorkoutTypes";
import Link from "next/link";
import { useContext, useState } from "react";

type ActiveTab = "plan" | "saved";

const MyPlanPage = () => {
    const { addPlan, saveLater } = useContext(ExerciseContext);

    const [activeTab, setActiveTab] = useState<ActiveTab>("plan");

    const currentList = activeTab === "plan" ? addPlan : saveLater;

    const totalMinutes = currentList.reduce(
        (total, exercise) => total + exercise.duration, 0);
    const totalCalories = currentList.reduce(
        (total, exercise) => total + exercise.caloriesBurned, 0);

    const [sortby, setSortby] = useState<"time" | "calories" | "rating">("time");

    const sortList = (list: WorkoutTypes[]) => {
        const sortListarr = [...list];

        if (sortby === "time") {
            sortListarr.sort((a, b) => a.duration - b.duration);
        } else if (sortby === "calories") {
            sortListarr.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
        } else if (sortby === "rating") {
            sortListarr.sort((a, b) => b.rating - a.rating);
        }

        return sortListarr;
    };

    const sortedList = sortList(currentList);

    return (
        <main className="px-4 py-8 sm:px-5 sm:py-10">

            <div>
                <h1 className="text-2xl font-extrabold uppercase text-white sm:text-3xl">
                    My Plan
                </h1>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292c32] bg-[#15181d] sm:grid-cols-3">

                <div className="px-6 py-5 sm:py-7">
                    <p className="text-xs text-gray-500">
                        Exercises
                    </p>

                    <p className="mt-1 text-3xl font-extrabold text-[#c8ff00] sm:text-4xl">
                        {currentList.length}
                    </p>
                </div>

                <div className="border-t border-[#292c32] px-6 py-5 sm:border-l sm:border-t-0 sm:py-7">
                    <p className="text-xs text-gray-500">
                        Minutes
                    </p>

                    <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
                        {totalMinutes}
                    </p>
                </div>

                <div className="border-t border-[#292c32] px-6 py-5 sm:border-l sm:border-t-0 sm:py-7">
                    <p className="text-xs text-gray-500">
                        Calories
                    </p>

                    <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
                        {totalCalories}
                    </p>
                </div>

            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex w-fit rounded-xl border border-[#292c32] bg-[#15181d] p-1">

                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`rounded-lg px-4 py-2 text-xs font-medium transition-all sm:px-5 ${activeTab === "plan"
                            ? "bg-[#20242c] text-white shadow-sm"
                            : "text-[#8b919c] hover:text-white"
                            }`}
                    >
                        Today’s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-lg px-4 py-2 text-xs font-medium transition-all sm:px-5 ${activeTab === "saved"
                            ? "bg-[#20242c] text-white shadow-sm"
                            : "text-[#8b919c] hover:text-white"
                            }`}
                    >
                        Saved
                    </button>

                </div>

                <div className="flex items-center gap-2">

                    <p className="text-xs text-gray-500">
                        Sort By
                    </p>

                    <div>
                        <select
                            value={sortby}
                            onChange={(e) => setSortby(e.target.value as "time" | "calories" | "rating")}
                            className="select appearance-none rounded-md"
                        >
                            <option value={"time"}>Duration</option>
                            <option value={"calories"}>Calories</option>
                            <option value={"rating"}>Rating</option>
                        </select>
                    </div>

                </div>

            </div>

            <div className="mt-5">

                {currentList.length === 0 ? (

                    <div className="flex min-h-[280px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#292c32] px-5 py-20 text-center sm:py-30">

                        <h2 className="text-lg font-extrabold uppercase text-white">
                            Nothing Here Yet
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            {activeTab === "plan"
                                ? "Browse the library and add a lift to get today moving."
                                : "Save a workout to find it here later."
                            }
                        </p>

                        <Link href="/">
                            <button className="mt-5 rounded-full bg-[#c8ff00] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#b5e600]">
                                Go to workouts
                            </button>
                        </Link>

                    </div>

                ) : (

                    <div className="space-y-4">

                        {sortedList.map((exercise) =>
                            activeTab === "plan" ? (
                                <PlanCard
                                    key={exercise.id}
                                    exercise={exercise}
                                />
                            ) : (
                                <SaveCard
                                    key={exercise.id}
                                    exercise={exercise}
                                />
                            )
                        )}

                    </div>

                )}

            </div>

        </main>
    );
};

export default MyPlanPage;