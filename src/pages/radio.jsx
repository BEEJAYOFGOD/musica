import release_one from "../../src/assets/coverarts/release-1.png";
import release_two from "../../src/assets/coverarts/release-2.png";
import release_three from "../../src/assets/coverarts/release-3.png";
import CollectionCard from "../../src/component/CollectionCard";
const Radio = () => {
    return (
        <section className="pb-52">
            <div className="flex gap-4">
                <button className="bg-[#FACD66] px-4 py-2 rounded-full">
                    My collection
                </button>
                <button className="border-white/30 border px-4 py-2 rounded-full text-white/30">
                    Likes
                </button>
            </div>

            <section className="mt-12">
                <div className="md:grid   grid-cols-6 gap-8">
                    {Array.from({ length: 40 }, (_, index) => (
                        <CollectionCard
                            coverArt={
                                index % 2 == 0
                                    ? release_one
                                    : index % 3 == 0
                                    ? release_three
                                    : release_two
                            }
                            author={"davido"}
                            title={"stand strong"}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Radio;
