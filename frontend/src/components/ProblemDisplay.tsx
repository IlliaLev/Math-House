import { type Problem } from "../models/problems";
import { BlockMath } from "react-katex";

type ProblemProps = Omit<Problem, 'id'> & Partial<Pick<Problem, 'id'>>;

function ProblemDisplay({problem_type, content, condition, answer} : ProblemProps) {
    return (
        <div>
            <h1>{problem_type}</h1>
            <BlockMath math={content} />
            <p>{condition}</p>
            <p>{answer}</p>
        </div>
    );
}

export default ProblemDisplay;