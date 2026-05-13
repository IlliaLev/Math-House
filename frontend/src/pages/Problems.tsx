import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Problem {
    problem_type: string,
    id: string,
    content: string,
    condition: string,
    answer: string,
}

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
                <p>{problem.content}</p>
                <p>{problem.condition}</p>
                <p>{problem.answer}</p>
            </div>
        </main>
    )
}

export default Problems;