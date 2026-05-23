import React from "react";

interface GradientBorderDivProps {
    children: React.ReactNode,
    outerClassName?: string,
    innerClassName?: string,
    gradientDirection?: string,
    onClick?: () => void,
}

function GradientBorderDiv({children, outerClassName, innerClassName, onClick} : GradientBorderDivProps) {
    return (
        <div className={`
            p-0.5 rounded-lg 
            from-cl-gr-from to-cl-gr-to
            bg-linear-to-r
            ${outerClassName}
        `} onClick={onClick}>
            <div className={`
                z-1
                w-full h-full
                flex items-center justify-center
                bg-cl-bg-inner-100 rounded-lg p-7
                text-cl-text-900
                ${innerClassName}
            `}>
                {children}
            </div>
        </div>
    );
}

export default GradientBorderDiv;