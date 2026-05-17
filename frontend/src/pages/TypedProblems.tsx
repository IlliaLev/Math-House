import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import { type Problem } from "../models/problems";
import CollapsibleDiv from "../components/CollapsibleDiv";

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
        <main className={`
            bg-cl-bg min-h-screen w-full
            flex flex-col flex-1 items-center 
            text-cl-text-900
        `}>
            <h1 className="mt-5">{problem_type} Problems</h1>
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
        </main>
    );
}

export default TypedProblems;