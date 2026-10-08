"use client"
import { ExerciseContext } from '@/context/WorkoutContext';
import { WorkoutTypes } from '@/types/WorkoutTypes';
import { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa6';
import { Bounce, toast } from 'react-toastify';

const SaveLater = ({ workout }: { workout: WorkoutTypes }) => {

    const { saveLater, setSavelater } = useContext(ExerciseContext);

    const handleSaveLater = () => {
        // check duplicate
        if(saveLater.some((exercise)=> exercise.id === workout.id)){
            toast.error("Already in your save list", {
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
        setSavelater([...saveLater,workout]);

        toast.success("Saved for later", {
                position: "top-right",
                autoClose: 700,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Bounce,
            });
    }


    return (
        <button onClick={handleSaveLater} className="btn border border-[#343943] bg-transparent text-gray-300 hover:bg-[#191c21] hover:text-white">
            <FaRegBookmark />
            Save for later
        </button>
    );
};

export default SaveLater;