"use client";

import { WorkoutTypes } from "@/types/WorkoutTypes";
import { createContext, ReactNode, useState } from "react";

type ExerciseContextType = {
    addPlan: WorkoutTypes[];
    setAddPlan: React.Dispatch<React.SetStateAction<WorkoutTypes[]>>;
    saveLater: WorkoutTypes[];
    setSavelater: React.Dispatch<React.SetStateAction<WorkoutTypes[]>>;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
};

export const ExerciseContext = createContext<ExerciseContextType>(
    {} as ExerciseContextType
);

const WorkoutContext = ({ children }: { children: ReactNode }) => {

    const [addPlan, setAddPlan] = useState<WorkoutTypes[]>([]);
    const [saveLater, setSavelater] = useState<WorkoutTypes[]>([]);

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
    };

    return (
        <ExerciseContext.Provider value={shareData}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default WorkoutContext;