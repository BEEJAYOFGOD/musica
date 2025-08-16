import Sidebar from "../component/sidebar";
import Logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.png";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="grid grid-cols-[auto_1fr] min-h-screen relative">
            <div className="border border-white p-4 sticky top-0 overflow-none max-h-screen">
                <img className=" mx-auto" src={Logo} alt="logo" />
                <Sidebar />
            </div>

            <div className="border border-white bg-[#1d2123]">
                <header className="flex gap-3 items-center border p-6 border-white bg-inherit sticky top-0 z-10">
                    <img className="w-6 h-6" src={search} alt="" />
                    <input
                        type="search"
                        className="placeholder:text-gray-400 outline-0 text-gray-300 text-xl bg-transparent"
                        placeholder="Search artist"
                    />
                </header>

                <Outlet />

                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit aliquam nemo qui labore officia necessitatibus illo
                        ullam voluptatibus, suscipit voluptate obcaecati vitae
                        laudantium velit distinctio nulla aliquid optio! Quo,
                        eius. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui enim expedita repudiandae vero cum, hic minus
                        temporibus iusto fuga consequatur? Reprehenderit natus
                        dolorum fugit iste? Labore explicabo quidem repudiandae
                        iste!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit aliquam nemo qui labore officia necessitatibus illo
                        ullam voluptatibus, suscipit voluptate obcaecati vitae
                        laudantium velit distinctio nulla aliquid optio! Quo,
                        eius. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui enim expedita repudiandae vero cum, hic minus
                        temporibus iusto fuga consequatur? Reprehenderit natus
                        dolorum fugit iste? Labore explicabo quidem repudiandae
                        iste!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit aliquam nemo qui labore officia necessitatibus illo
                        ullam voluptatibus, suscipit voluptate obcaecati vitae
                        laudantium velit distinctio nulla aliquid optio! Quo,
                        eius. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui enim expedita repudiandae vero cum, hic minus
                        temporibus iusto fuga consequatur? Reprehenderit natus
                        dolorum fugit iste? Labore explicabo quidem repudiandae
                        iste!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit aliquam nemo qui labore officia necessitatibus illo
                        ullam voluptatibus, suscipit voluptate obcaecati vitae
                        laudantium velit distinctio nulla aliquid optio! Quo,
                        eius. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui enim expedita repudiandae vero cum, hic minus
                        temporibus iusto fuga consequatur? Reprehenderit natus
                        dolorum fugit iste? Labore explicabo quidem repudiandae
                        iste!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit aliquam nemo qui labore officia necessitatibus illo
                        ullam voluptatibus, suscipit voluptate obcaecati vitae
                        laudantium velit distinctio nulla aliquid optio! Quo,
                        eius. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui enim expedita repudiandae vero cum, hic minus
                        temporibus iusto fuga consequatur? Reprehenderit natus
                        dolorum fugit iste? Labore explicabo quidem repudiandae
                        iste!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit aliquam nemo qui labore officia necessitatibus illo
                        ullam voluptatibus, suscipit voluptate obcaecati vitae
                        laudantium velit distinctio nulla aliquid optio! Quo,
                        eius. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui enim expedita repudiandae vero cum, hic minus
                        temporibus iusto fuga consequatur? Reprehenderit natus
                        dolorum fugit iste? Labore explicabo quidem repudiandae
                        iste!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit aliquam nemo qui labore officia necessitatibus illo
                        ullam voluptatibus, suscipit voluptate obcaecati vitae
                        laudantium velit distinctio nulla aliquid optio! Quo,
                        eius. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui enim expedita repudiandae vero cum, hic minus
                        temporibus iusto fuga consequatur? Reprehenderit natus
                        dolorum fugit iste? Labore explicabo quidem repudiandae
                        iste!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit aliquam nemo qui labore officia necessitatibus illo
                        ullam voluptatibus, suscipit voluptate obcaecati vitae
                        laudantium velit distinctio nulla aliquid optio! Quo,
                        eius. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui enim expedita repudiandae vero cum, hic minus
                        temporibus iusto fuga consequatur? Reprehenderit natus
                        dolorum fugit iste? Labore explicabo quidem repudiandae
                        iste!
                    </p>
                </div>
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
