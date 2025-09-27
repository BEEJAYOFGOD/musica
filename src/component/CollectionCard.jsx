const CollectionCard = ({ coverArt, author, title }) => {
    return (
        <article className="relative h-60 aspect-square  rounded-[10px] group overflow-hidden">
            <div
                className="absolute h-full w-full rounded-[10px]  bg-cover -z-3 group-hover:scale-125 group-hover:ease-in transition-all duration-300 ease-out"
                style={{
                    backgroundImage: `
                                linear-gradient(to bottom,
                                rgba(29, 33, 35, 0) 0%,
                                rgba(29, 33, 35, 0.5) 50%,
                                rgba(29, 33, 35, 0.8) 100%),
                                url(${coverArt})`,
                }}
            ></div>

            <div className="-z-1 absolute left-4 bottom-0 translate-y-8 text-white group-hover:translate-0 transition-all duration-300 ease-out group-hover:ease-in">
                <p className="text-2xl font-bold">{title}</p>
                <p className="text-sm">{author}</p>
                <p className="opacity-0 group-hover:opacity-100 my-4 text-xs duration-300 ease-out group-hover:ease-in">
                    25 likes
                </p>
            </div>

            <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 p-4 bg-[#FACD66]/45 rounded-full  group-hover:translate-0 transition-all duration-300 ease-out group-hover:ease-in ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="10"
                    viewBox="0 0 9 10"
                    fill="none"
                >
                    <path
                        d="M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z"
                        fill="#FACD66"
                    />
                </svg>
            </div>
        </article>
    );
};

export default CollectionCard;
