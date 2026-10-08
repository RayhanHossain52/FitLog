'use client'
import { createContext, ReactNode, useState } from "react";

// use reactCotext
export const ExerciseContext = createContext<any>({});


// Main content
const WorkoutContext = ({ children }: { children: ReactNode }) => {

    const [addPlan, setAddPlan] = useState([]);
    const [saveLater, setSavelater] = useState([]);

    const removeFromPlan = (id: number) => {
        setAddPlan((prev) => {
            return prev.filter((exercise) => exercise.id !== id);
        });
    };

    const removeFromSaved = (id: number) => {
        setSavelater((prev) => {
            return prev.filter((exercise) => exercise.id !== id);
        });
    };

    const shareData = {
        addPlan,
        setAddPlan,
        saveLater,
        setSavelater,
        removeFromPlan,
        removeFromSaved
    }

    return <ExerciseContext.Provider value={shareData} >
        {children}
    </ExerciseContext.Provider>
};

export default WorkoutContext;