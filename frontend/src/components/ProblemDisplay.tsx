import { type Problem } from "../models/problems";
import { BlockMath } from "react-katex";
import GradientBorderDiv from "./GradientBorderDiv";
import LockedDiv from "./LockedDiv";

type ProblemProps = Omit<Problem, 'id'> & Partial<Pick<Problem, 'id'>> & { header?: boolean };

function ProblemDisplay({problem_type, id, content, condition, answer, header} : ProblemProps) {
    return (
        <div className={`
            min-w-170
        `}>
            {header ? (
                <h1 className="text-3xl text-center">{problem_type} Problem №{id}</h1>
            ) : (<></>)}
            <GradientBorderDiv outerClassName={`
                m-10 
            `} innerClassName={`
                flex flex-col gap-3 w-full
            `}>
                <div className={`
                    flex flex-row gap-5 w-full
                `}>
                    <GradientBorderDiv innerClassName={`
                        text-2xl w-40    
                    `}>
                        {problem_type}
                    </GradientBorderDiv>

                    <GradientBorderDiv innerClassName={`
                        text-xl w-full 
                    `} outerClassName={`
                        flex-1
                    `} gradientDirection="l">
                        {condition}
                    </GradientBorderDiv>
                </div>
                
                <div className={`
                    flex flex-row gap-5 w-full items-stretch
                `}>
                    <GradientBorderDiv innerClassName={`
                        
                    `} outerClassName={`
                        w-full
                    `}>
                        <div>
                            <BlockMath math={content}/>
                        </div>
                    </GradientBorderDiv>

                    <LockedDiv outerClassName={`
                        w-40    
                    `} innerClassName={`
                        h-full
                    `}>
                        <div>
                            <BlockMath math={answer} />
                        </div>
                    </LockedDiv>
                </div>

                
            </GradientBorderDiv>
        </div>
    );
}

export default ProblemDisplay;