import { useNavigate } from "react-router-dom";
import GradientBorderDiv from "../components/GradientBorderDiv"

function Home() {
    const size = "w-30 h-25";

    const navigate = useNavigate();

    return (
        <main className={`
            relative min-h-screen w-full
            bg-cl-bg text-cl-text-900
            flex flex-col items-center
        `}>
            <h1 className="text-5xl text-center mt-15">Sharpen your mind with <span className="text-cl-gr-to font-semibold block">these math problems.</span></h1>
            <p className="mt-3 text-xl text-center">Hundreds of problems sorted by type, so you always know what to choose.</p>

            <GradientBorderDiv outerClassName={`mt-5 w-50 h-15 smooth-gradient-change cursor-pointer`} innerClassName="text-center" onClick={() => navigate("problems/")}>
                Browse Problems
            </GradientBorderDiv>

            <div className={`
                mt-10 flex flex-row items-center justify-center gap-10  
            `}>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl">100+</p>
                    <p>Problems</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl">7</p>
                    <p>Types</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl">Free</p>
                    <p>Always</p>
                </div>
            </div>

            <h2 className="mt-10 text-2xl">Browse by <span className="text-cl-gr-to">type</span></h2>

            <div className="mt-3 flex flex-row gap-5 flex-wrap items-center justify-center">
                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change cursor-pointer`} onClick={() => navigate("problems/linear")}>
                    Linear
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change cursor-pointer`} onClick={() => navigate("problems/logarithm")}>
                    Logarithmic
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change cursor-pointer`} onClick={() => navigate("problems/power")}>
                    Power
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change cursor-pointer`} onClick={() => navigate("problems/radical")}>
                    Radical
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change cursor-pointer`} onClick={() => navigate("problems/absolute")}>
                    Absolute
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change cursor-pointer`} onClick={() => navigate("problems/rational")}>
                    Rational
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change cursor-pointer`} onClick={() => navigate("problems/quadratic")}>
                    Quadratic
                </GradientBorderDiv>
            </div>
        </main>
    )
}

export default Home