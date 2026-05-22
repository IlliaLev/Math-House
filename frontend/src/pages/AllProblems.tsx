import { useState, useEffect } from "react";
import { type Problem } from "../models/problems";
import 'katex/dist/katex.min.css';
import LoadingDiv from "../components/LoadingDiv";
import NotFound from "./NotFound";
import CollapsibleDiv from "../components/CollapsibleDiv";

function AllProblems() {
    const [problems, setProblems] = useState<Problem[] | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/problems`)
            .then(res => res.json())
            .then(data => {
                setProblems(Array.isArray(data) ? data : data.problems ?? null);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Loading error: ", err);
                setLoading(false);
            })
    }, []);

    const content = loading ? (<LoadingDiv />)
        : !problems ? (<NotFound />)
        : (<>
            <h1 className="mt-5 text-2xl">All Problems</h1>
            <ul>
                {problems?.map((problem) => (
                    <li key={problem.id}>
                        <CollapsibleDiv problem_type={problem.problem_type} 
                                        id={problem.id} 
                                        content={problem.content} 
                                        condition={problem.condition} 
                                        answer={problem.answer} />
                    </li>
                ))}
            </ul>
           </>)

    return (
        <main className={`
            bg-cl-bg min-h-screen w-full
            flex flex-col flex-1 items-center 
            text-cl-text-900
        `}>
            {content}
        </main>
    )
}

export default AllProblems;