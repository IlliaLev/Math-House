import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import { type Problem } from "../models/problems";
import ProblemDisplay from "../components/ProblemDisplay";
import LoadingDiv from "../components/LoadingDiv";
import NotFoundDiv from "../components/NotFoundDiv";

function TypedIdProblems() {
    const { problem_type, id } = useParams<{ problem_type: string; id: string }>();

    const [problem, setProblem] = useState<Problem | null> (null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/problems/${problem_type}/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Server error");
                return res.json();
            })
            .then((data) => {
                setProblem(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Loading Error: ", err)
                setLoading(false);
            });
    }, [problem_type, id]);

    const content = loading ? (<LoadingDiv />)
        : !problem ? (<NotFoundDiv />)
        : (<ProblemDisplay problem_type={problem.problem_type} content={problem.content} condition={problem.condition} answer={problem.answer}/>);

    return (
        <main className={`
            bg-cl-bg min-h-screen max-h-screen w-full
            flex flex-col flex-1 items-center justify-center
            text-cl-text-900
        `}>
            {content}
        </main>
    )
}

export default TypedIdProblems;