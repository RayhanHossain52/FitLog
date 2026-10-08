"use client";

import { ExerciseContext } from "@/context/WorkoutContext";
import { WorkoutTypes } from "@/types/WorkoutTypes";
import { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const AddPlanButton = ({ workout }: { workout: WorkoutTypes }) => {

    const { addPlan, setAddPlan } = useContext(ExerciseContext);

    const handlePlan = () => {

        if (addPlan.some((item) => item.id === workout.id)) {

            toast.error("Already in your plan", {
                position: "top-right",
                autoClose: 700,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Bounce,
            });

            return;
        }

        setAddPlan((prev) => [...prev, workout]);

        toast.success("Added to today's plan", {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce,
        });
    };

    return (
        <button
            onClick={handlePlan}
            className="btn border-0 bg-[#c8ff00] text-black hover:bg-[#b5e600]"
        >
            <FaCalendarPlus />
            Add to today's plan
        </button>
    );
};

export default AddPlanButton;