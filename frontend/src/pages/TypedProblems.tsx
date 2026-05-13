import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlockMath } from "react-katex";
import 'katex/dist/katex.min.css';
import { type Problem } from "../models/problems";

function TypedProblems() {
    const { problem_type } = useParams<{ problem_type: string }>();

    const [problems, setProblems] = useState<Problem[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/problems/${problem_type}`)
            .then(res => res.json())
            .then(data => {
                setProblems(data);
                setLoading(false);
            })
            .catch(err => {
                console.log("Loading Error: ", err);
                setLoading(false);
            })
    }, [problem_type]);

    if(loading) {
        return (
            <p>Loading</p>
        );
    }

    if(!problems) {
        return (
            <p>Not Found</p>
        )
    }

    return (
        <main>
            <ul>
                {problems?.map((problem) => (
                    <li key={problem.id}>
                        <p>{problem.problem_type}</p>
                        <p>{problem.condition}</p>
                        <BlockMath math={problem.content} />
                        <p>{problem.answer}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default TypedProblems;