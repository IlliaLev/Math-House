import ProblemDisplay from "./ProblemDisplay";
import { type Problem } from "../models/problems";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

type CollapsibleDivProps = Problem;

function CollapsibleDiv({problem_type, id, content, condition, answer} : CollapsibleDivProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="py-5">
            <div className={`
                flex flex-row gap-5 items-center cursor-pointer peer
            `} onClick={() => setOpen(!open)}>
                <ChevronRight className={`
                    transition-transform duration-300
                    ${open ? "rotate-90" : ""}    
                `}/>
                <span>Problem №{id}</span>
            </div>
            <div className="h-0.5 w-full bg-cl-text-900 peer-hover:bg-cl-gr-from transition-colors duration-150"/>

            <div className={`
                overflow-hidden transition-all duration-300
                ${open ? "max-h-96" : "max-h-0"}
            `}>
                <ProblemDisplay problem_type={problem_type} id={id} content={content} condition={condition} answer={answer}/>
            </div>
        </div>
    );
}

export default CollapsibleDiv;