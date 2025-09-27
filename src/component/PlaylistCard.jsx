import { useState } from "react";

const PlaylistCard = ({ coverArt, title, artist, length }) => {
    const [Like, setLike] = useState(false);
    const handleOnCLick = () => {
        setLike(!Like);
    };
    return (
        <article
            className="flex gap-3 bg-[#1A1E1F] rounded-[15px] p-4"
            // style={{ background: "rgba(51, 55, 59, 0.37)" }}
        >
            <div className="rounded-[10px]">
                <img className="w-[63px] aspect-square" src={coverArt} alt="" />
            </div>
            <div className="flex justify-between  w-full">
                <div className=" text-white gap-2">
                    <h3>{title}</h3>
                    <p className="text-white/50">{artist}</p>
                    <p>{length}</p>
                </div>
                <div className="flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill={Like ? "#FACD66" : "none"}
                        onClick={handleOnCLick}
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                            stroke="#FACD66"
                            stroke-width="0.5625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            opacity="0.4"
                            d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                            stroke="#FACD66"
                            stroke-width="0.5625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </article>
    );
};

export default PlaylistCard;
