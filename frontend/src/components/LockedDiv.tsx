import { useState } from "react";
import React from "react";
import { LockKeyhole } from "lucide-react";

interface LockedDivProps {
    children: React.ReactNode,
    outerClassName?: string,
    innerClassName?: string,
}

function LockedDiv({children, outerClassName, innerClassName} : LockedDivProps) {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={`
            relative
            p-0.5 rounded-lg 
            from-cl-gr-from to-cl-gr-to
            bg-linear-to-r
            *:cursor-pointer
            ${outerClassName}
        `} onClick={() => setClicked(!clicked)}>
            <div className={`
                w-full h-full
                flex items-center justify-center
                bg-cl-bg-inner-100 rounded-lg p-7
                text-cl-text-900    
                transition-opacity duration-300
                select-none
                ${clicked ? "opacity-100" : "opacity-0"}
                ${innerClassName}
            `}>
                {children}
            </div>
            <LockKeyhole className={`
                absolute inset-0 m-auto text-cl-bg-inner-100
                transition-opacity duration-300
                ${!clicked ? "opacity-100" : "opacity-0"}
            `} size={40}/>
        </div>
    );
}

export default LockedDiv;