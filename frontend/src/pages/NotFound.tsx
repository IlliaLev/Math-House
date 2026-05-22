import NotFoundDiv from "../components/NotFoundDiv";

function NotFound() {
    return (
        <div className={`
            bg-cl-bg min-h-screen max-h-screen w-full
            flex flex-col flex-1 items-center justify-center
            text-cl-text-900
        `}>
            <NotFoundDiv />
        </div>
        
    );
}

export default NotFound;