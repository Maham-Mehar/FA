import Sidebar from "./Sidebar";
import Body from "./Body";

const Hero = () => {


    return (
        <div className="bg-white">
            <header className="max-w-7xl mx-auto px-6 py-4 sm:py-6 flex gap-4">
                <Sidebar />
                <Body />
            </header>
        </div>
    );
};

export default Hero;
