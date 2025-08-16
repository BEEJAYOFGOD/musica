const PlaylistCard = ({ coverArt, title, artist, length }) => {
    return (
        <article className="flex gap-3 bg-[#1A1E1F] rounded-[20px] p-4">
            <div className="rounded-[10px]">
                <img src={coverArt} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{artist}</p>
                <p>{length}</p>
            </div>
        </article>
    );
};

export default PlaylistCard;
