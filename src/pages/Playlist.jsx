import lead_image from "../../src/assets/coverarts/Lead-image.png";
import lead_image_big from "../../src/assets/coverarts/Lead-image-big.png";
import add_to_col from "../../src/assets/icons/music-square-add.png";
import release_one from "../../src/assets/coverarts/release-1.png";
import AlbumMusicCard from "../component/AlbumMusicCard";

const Playlist = () => {
    return (
        <section className="p-4 pb-48">
            <section className="flex gap-6">
                <div
                    className="absolute inset-0 -z-99 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `
                        linear-gradient(to bottom,
                        rgba(29, 33, 35, 0.6) 0%,
                        rgba(29, 33, 35, 0.8) 30%,
                        rgba(29, 33, 35, 0.9) 50%,
                        rgba(29, 33, 35, 1) 100%),
                        url(${lead_image_big})`,
                    }}
                ></div>
                <div
                    className="h-80 aspect-square rounded-[20px]"
                    style={{
                        backgroundImage: `url(${lead_image})`,
                    }}
                ></div>
                <div className="flex flex-col mt-auto text-white/50">
                    <h2 className="text-6xl ">Tomorrow's tunes</h2>
                    <p className="max-w-2xl mt-4 mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti quam molestiae nostrum similique adipisci,
                        dolores qui aliquam nulla maxime expedita, sunt et
                        voluptate aperiam, nisi debitis repudiandae tempore
                        dolor explicabo.
                    </p>

                    <p>64 songs = 16hrs+</p>
                    <div className="flex items-center gap-2 mt-4 ">
                        <button className="flex items-center gap-1 bg-[#FFFFFF12]/70 backdrop-blur-3xl p-2 rounded-full ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M8.00001 1.33331C11.6744 1.33331 14.6667 4.32415 14.6667 8.00384C14.6667 11.6758 11.6744 14.6666 8.00001 14.6666C4.32562 14.6666 1.33334 11.6758 1.33334 8.00384C1.33334 4.32415 4.32562 1.33331 8.00001 1.33331ZM7.24068 5.35325C7.09911 5.35325 6.96397 5.38541 6.83527 5.44973C6.6744 5.53978 6.5457 5.68128 6.47491 5.84851C6.42987 5.96428 6.35908 6.3116 6.35908 6.31804C6.2883 6.69752 6.24969 7.31498 6.24969 7.99676C6.24969 8.64703 6.2883 9.23812 6.34621 9.62403C6.35265 9.63047 6.42343 10.0614 6.50065 10.2093C6.64222 10.4795 6.91893 10.6467 7.21494 10.6467H7.24068C7.43373 10.6403 7.83913 10.473 7.83913 10.4666C8.52125 10.1836 9.86616 9.30244 10.4067 8.71714L10.4453 8.67854C10.5161 8.60779 10.6062 8.49845 10.6255 8.47272C10.7285 8.33765 10.7799 8.17042 10.7799 8.00384C10.7799 7.81667 10.722 7.64301 10.6126 7.50151C10.5869 7.47578 10.4904 7.36644 10.4003 7.27639C9.8726 6.71038 8.4955 5.78419 7.77478 5.50119C7.66539 5.45681 7.38868 5.35968 7.24068 5.35325Z"
                                    fill="#FACD66"
                                />
                            </svg>
                            <span>play all</span>
                        </button>
                        <button className="flex items-center gap-1 bg-[#FFFFFF12]/70 backdrop-blur-3xl p-2 rounded-full">
                            <img src={add_to_col} alt="add to collection" />
                            <span>Add to collection</span>
                        </button>
                        <button className="flex items-center  bg-[#FFFFFF12]/70 backdrop-blur-3xl p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M5.51987 1.66697C5.93987 1.67975 6.34654 1.75308 6.74054 1.88708H6.77987C6.80654 1.89975 6.82654 1.91375 6.83987 1.92641C6.9872 1.97375 7.12654 2.02708 7.25987 2.10041L7.5132 2.21375C7.6132 2.26708 7.7332 2.36641 7.79987 2.40708C7.86654 2.44641 7.93987 2.48708 7.99987 2.53308C8.74054 1.96708 9.63987 1.66041 10.5665 1.66697C10.9872 1.66697 11.4072 1.72641 11.8065 1.86041C14.2672 2.66041 15.1539 5.36041 14.4132 7.72041C13.9932 8.92641 13.3065 10.0271 12.4072 10.9264C11.1199 12.1731 9.7072 13.2797 8.18654 14.2331L8.01987 14.3337L7.84654 14.2264C6.32054 13.2797 4.89987 12.1731 3.60054 10.9197C2.7072 10.0204 2.01987 8.92641 1.5932 7.72041C0.839869 5.36041 1.72654 2.66041 4.21387 1.84641C4.4072 1.77975 4.60654 1.73308 4.80654 1.70708H4.88654C5.07387 1.67975 5.25987 1.66697 5.44654 1.66697H5.51987ZM11.4599 3.77375C11.1865 3.67975 10.8865 3.82708 10.7865 4.10708C10.6932 4.38708 10.8399 4.69375 11.1199 4.79308C11.5472 4.95308 11.8332 5.37375 11.8332 5.83975V5.86041C11.8205 6.01308 11.8665 6.16041 11.9599 6.27375C12.0532 6.38708 12.1932 6.45308 12.3399 6.46708C12.6132 6.45975 12.8465 6.24041 12.8665 5.95975V5.88041C12.8865 4.94641 12.3205 4.10041 11.4599 3.77375Z"
                                    // fill="#E5524A"
                                    fill="none"
                                    stroke="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <div className="flex flex-col gap-2 mt-8 ">
                {Array.from({ length: 40 }, (_, index) => (
                    <AlbumMusicCard
                        coverArt={release_one}
                        title={"Love me love you"}
                        musicName={"stand strong"}
                        albumName={"African Giant"}
                        length={"2:09"}
                    />
                ))}
            </div>
        </section>
    );
};

export default Playlist;
