import artist from "../assets/artist.png";
import vector from "../assets/icons/vector.svg";
import playlist1 from "../assets/Rectangle-1.png";
import playlist2 from "../assets/Rectangle-2.png";
import playlist3 from "../assets/Rectangle-3.png";
import PlaylistCard from "../component/PlaylistCard";
import release_1 from "../assets/coverarts/release-1.png";
import release_2 from "../assets/coverarts/release-2.png";
import release_3 from "../assets/coverarts/release-3.png";
import release_4 from "../assets/coverarts/release-4.png";
import release_5 from "../assets/coverarts/release-5.png";
import release_6 from "../assets/coverarts/release-6.png";
import release_7 from "../assets/coverarts/release-7.png";
import release_8 from "../assets/coverarts/release-8.png";
import SongCard from "../component/SongCard";

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

    const releaseList = [
        {
            coverArt: release_1,
            title: "Life in  a bubble",
            artist: "The van",
        },
        { coverArt: release_2, title: "Mountain", artist: "Krisk" },
        { coverArt: release_3, title: "Limit", artist: "John Dillion" },
        { coverArt: release_4, title: "Everything ", artist: "Ameed" },
        { coverArt: release_5, title: "Cancelled", artist: "Eminem" },
        { coverArt: release_6, title: "Blind", artist: "Wik Zee" },
        { coverArt: release_7, title: "Nomad", artist: "The van" },
        { coverArt: release_8, title: "Life in  a bubble", artist: "The van" },
        {
            coverArt: release_1,
            title: "Life in  a bubble",
            artist: "The van",
        },
        { coverArt: release_2, title: "Mountain", artist: "Krisk" },
        { coverArt: release_3, title: "Limit", artist: "John Dillion" },
        { coverArt: release_4, title: "Everything ", artist: "Ameed" },
        {
            coverArt: release_1,
            title: "Life in  a bubble",
            artist: "The van",
        },
        { coverArt: release_2, title: "Mountain", artist: "Krisk" },
        { coverArt: release_3, title: "Limit", artist: "John Dillion" },
        { coverArt: release_4, title: "Everything ", artist: "Ameed" },
        { coverArt: release_2, title: "Mountain", artist: "Krisk" },
        { coverArt: release_3, title: "Limit", artist: "John Dillion" },
        { coverArt: release_4, title: "Everything ", artist: "Ameed" },
    ];
    return (
        <section className="pb-48">
            <div className="grid grid-cols-[1.2fr_1fr] gap-x-6  pr-20 text-white ">
                <div className="flex bg-[#609EAF] p-12 relative bg-clip-border rounded-[40px]">
                    <div className="">
                        <h1>Currated playlist</h1>
                        <p className="mt-28 text-5xl font-bold">R & B Hits</p>
                        <p className="max-w-md">
                            All mine, Lie again, Petty call me everyday, Out of
                            time, No love, Bad habit, and so much more
                        </p>
                        <p className="mt-16">
                            <img src="" alt="heart" /> <span>likes</span>
                        </p>
                    </div>
                    <div className="right-0 top-0 h-full bottom-0  absolute">
                        <img
                            className="rounded-[40px] h-full"
                            src={vector}
                            alt=""
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 h-full ">
                        <img className="h-full" src={artist} alt="artist" />
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl">Top charts</h2>
                    <div className="space-y-4">
                        {playlists.map(
                            ({ coverArt, title, artist, length }) => (
                                <PlaylistCard
                                    coverArt={coverArt}
                                    title={title}
                                    artist={artist}
                                    length={length}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="w-[92vw] pl-4 pr-20 space-y-2 mt-12">
                <h2 className="text-white">New Releases</h2>
                <div className="flex gap-8  overflow-scroll max-w-[92vw]   hide-scrollbar box-border">
                    {releaseList.map(({ coverArt, title, artist }) => (
                        <SongCard
                            coverArt={coverArt}
                            title={title}
                            artist={artist}
                        />
                    ))}
                </div>
            </div>

            <div className="w-[92vw] pl-4 pr-20 mt-8 space-y-2">
                <h2 className="text-white">New Releases</h2>
                <div className="flex gap-8  overflow-scroll max-w-[92vw]   hide-scrollbar box-border">
                    {releaseList.map(({ coverArt, title, artist }) => (
                        <SongCard
                            coverArt={coverArt}
                            title={title}
                            artist={artist}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
