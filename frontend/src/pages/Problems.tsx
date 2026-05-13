import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlockMath } from "react-katex";
import 'katex/dist/katex.min.css';
import { type Problem } from "../models/problems";

function Problems() {
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
    if(loading) {
        return (
            <p>Loading</p>
        )
    }
    if(!problem) return (
        <p>Not Found</p>
    )

    return (
        <main>
            Problems Page
            <div>
                <h1>{problem.problem_type}</h1>
                <h4>{problem.id}</h4>
                <BlockMath math={problem.content} />
                <p>{problem.condition}</p>
                <p>{problem.answer}</p>
            </div>
        </main>
    )
}

export default Problems;