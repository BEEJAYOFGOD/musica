const SongCard = ({ coverArt, title, artist }) => {
    return (
        <article className="w-40 flex-shrink-0  aspect-square text-white/50">
            <div>
                <img className="rounded-[12px] w-full" src={coverArt} alt="" />
            </div>
            <div className="flex flex-col mt-2">
                <span className="text-white/50 m-0 leading-4 text-sm">
                    {title}
                </span>
                <span className="text-white/50 m-0 leading-4  text-xs border-white">
                    {artist}
                </span>
            </div>
        </article>
    );
};

export default SongCard;
