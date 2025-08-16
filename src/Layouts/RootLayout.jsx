import Sidebar from "../component/sidebar";
import Logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.png";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="grid grid-cols-[auto_1fr] min-h-screen border border-amber-200 max-w-screen relative">
            <div className=" p-4 pl-8 sticky top-0 overflow-none max-h-screen">
                <img className=" mx-auto" src={Logo} alt="logo" />
                <Sidebar />
            </div>

            <div className=" bg-[#1d2123]">
                <header className="flex gap-3 items-center p-6 bg-inherit sticky top-0 z-10">
                    <img className="w-6 h-6" src={search} alt="" />
                    <input
                        type="search"
                        className="placeholder:text-gray-400 outline-0 text-gray-300 text-xl bg-transparent"
                        placeholder="Search artist"
                    />
                </header>

                <Outlet />
            </div>

            {/* <div className="flex  border">
                <header className="flex  items-center border gap-12">
                    <div className="flex gap-3 items-center ">
                        <img className="w-6 h-6" src={search} alt="" />
                        <input
                            type="search"
                            className=" placeholder:text-gray-400 outline-0 text-gray-300 text-xl"
                            placeholder="Search artist"
                        />
                    </div>
                </header>
                <section></section>
            </div> */}

            <div
                id="music-nav"
                className="border border-red-600 h-48 fixed  bottom-0 w-full"
            ></div>
        </div>
    );
};

export default RootLayout;
