import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div>
            <div className={`
                h-12 w-full
                bg-cl-bg-inner-100
                flex flex-row items-center
            `}>
                <div className="ml-3 p-2 text-cl-gr-from hover:text-cl-text-900 cursor-pointer transition-colors duration-300" onClick={() => navigate(-1)}>
                    <ArrowLeft/>
                </div>
            </div>
            <div className="h-0.5 w-full bg-cl-gr-from"/>
        </div>
    );
}

export default Navbar;