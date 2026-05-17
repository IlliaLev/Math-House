import { Loader } from "lucide-react";

function LoadingDiv() {
    return (
        <Loader className={`
            absolute inset-0 m-auto
            animate-spin    
        `} size={50}/>
    );
}

export default LoadingDiv;