import { useState, useEffect } from "react";
import { type Problem } from "../models/problems";
import { BlockMath } from "react-katex";
import 'katex/dist/katex.min.css';

function AllProblems() {
    const [problems, setProblems] = useState<Problem[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/problems`)
            .then(res => res.json())
            .then(data => {
                setProblems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Loading error: ", err);
                setLoading(false);
            })
    }, []);

    if(loading) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <main className={`
            
        `}>
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
    )
}

export default AllProblems;