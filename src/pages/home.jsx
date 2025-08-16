import artist from "../assets/artist.png";
import vector from "../assets/icons/vector.svg";
import playlist1 from "../assets/Rectangle-1.png";
import playlist2 from "../assets/Rectangle-2.png";
import playlist3 from "../assets/Rectangle-3.png";
import PlaylistCard from "../component/PlaylistCard";

const Home = () => {
    const playlists = [
        {
            coverArt: playlist1,
            title: "Golden age of 80s",
            artist: " Sean Swadder",
            length: "2:34:45",
        },
        {
            coverArt: playlist2,
            title: "Golden age of 80s",
            artist: " Sean Swadder",
            length: "2:34:45",
        },
        {
            coverArt: playlist3,
            title: "Golden age of 80s",
            artist: " Sean Swadder",
            length: "2:34:45",
        },
    ];
    return (
        <>
            <div className="grid grid-cols-2 gap-x-6  p-8 text-white ">
                <div className="flex bg-[#609EAF] p-12 relative bg-clip-border rounded-[40px]">
                    <div className="">
                        <h1>Currated playlist</h1>
                        <p className="mt-34 text-5xl">R & B Hits</p>{" "}
                        <p className="max-w-md">
                            All mine, Lie again, Petty call me everyday, Out of
                            time, No love, Bad habit, and so much more
                        </p>
                        <p className="mt-24">
                            <img src="" alt="heart" /> <span>likes</span>
                        </p>
                    </div>
                    <div className="right-0 top-0  absolute">
                        <img className="rounded-[40px]" src={vector} alt="" />
                    </div>
                    <div className="absolute bottom-0 right-0 ">
                        <img src={artist} alt="artist" />
                    </div>
                </div>
                <div className="border space-y-4">
                    <h2 className="text-3xl">Top charts</h2>

                    {playlists.map(({ coverArt, title, artist, length }) => (
                        <PlaylistCard
                            coverArt={coverArt}
                            title={title}
                            artist={artist}
                            length={length}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
