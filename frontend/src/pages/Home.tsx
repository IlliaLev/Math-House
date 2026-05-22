import GradientBorderDiv from "../components/GradientBorderDiv"

function Home() {
    const size = "w-30 h-25";
    const onHoverTailwind = "hover:from-cl-text-900 hover:to-cl-gr-to hover:transition-all duration-300";

    return (
        <main className={`
            relative min-h-screen w-full
            bg-cl-bg text-cl-text-900
            flex flex-col items-center
        `}>
            <h1 className="text-5xl text-center mt-20">Sharpen your mind with <span className="text-cl-gr-to font-semibold block">these math problems.</span></h1>
            <p className="mt-3 text-xl text-center">Hundreds of problems sorted by type, so you always know what to choose.</p>

            <h2 className="mt-15 text-2xl">Browse by <span className="text-cl-gr-to">type</span></h2>

            <div className="mt-3 flex flex-row gap-5 flex-wrap items-center justify-center">
                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change`}>
                    linear
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change`}>
                    logarithm
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change`}>
                    power
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change`}>
                    radical
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change`}>
                    absolute
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change`}>
                    rational
                </GradientBorderDiv>

                <GradientBorderDiv outerClassName={`${size} smooth-gradient-change`}>
                    quadratic
                </GradientBorderDiv>
            </div>
        </main>
    )
}

export default Home