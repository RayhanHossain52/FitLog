import { WorkoutTypes } from "@/types/WorkoutTypes";
import WorkoutCard from "./WorkoutCard";


const Library = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();

    return (
        <section className="container mx-auto mt-18">

            <h2 className="text-2xl font-extrabold uppercase text-white">
                The Library
            </h2>

            <p className="mt-1 text-sm text-gray-500">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {data.map((workout: WorkoutTypes) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>

        </section>
    );
};

export default Library;