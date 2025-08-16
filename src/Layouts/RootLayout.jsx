import Sidebar from "../component/sidebar";
import Logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.png";
import artist from "../assets/artist.png";
import vector from "../assets/icons/vector.svg";

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

                <div className="grid grid-cols-2  p-8 text-white ">
                    <div className="flex bg-[#609EAF] p-12 relative bg-clip-border rounded-[40px]">
                        <div className="">
                            <h1>Currated playlist</h1>
                            <p className="mt-34 text-5xl">R & B Hits</p>{" "}
                            <p className="max-w-md">
                                All mine, Lie again, Petty call me everyday, Out
                                of time, No love, Bad habit, and so much more
                            </p>
                            <p className="mt-24">
                                <img src="" alt="heart" /> <span>likes</span>
                            </p>
                        </div>
                        <div className="right-0 top-0  absolute">
                            <img
                                className="rounded-[40px]"
                                src={vector}
                                alt=""
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 ">
                            <img src={artist} alt="artist" />
                        </div>
                    </div>
                    <div>
                        <img src={artist} alt="artist" />
                    </div>
                </div>

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
