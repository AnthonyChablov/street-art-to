import CardDisplay from "../DisplayElements/CardDisplay";
import { IStreetArt } from "../../../../models/streetArt";
import Divider from "@mui/material/Divider";
import Menu from "../../Menu/Menu";
import Title from "../../Title/Title";
import { useLikeStore } from "../../../../store/Like/likeStore";
import { useArtStore } from "../../../../store/Art/artStore";
import { ILikes } from "../../../../models/likes";

const MultiDisplay = () => {
  /* State */
  const { data, artSearchQuery, wardSearchQuery, programSearchQuery } =
    useArtStore();

  const { likeData } = useLikeStore();

  return (
    <div className={`overflow-y-auto flex-grow`}>
      <div className="text-center pt-8 pb-16">
        <Title title={"Street Art TO"} />
      </div>
      <Menu />
      <Divider className="bg-zinc-700" sx={{ height: "2px", mt: 7, mb: 2 }} />
      <Divider />
      <div className=" pt-10 ">
        {/* Filter and mapping out Card Display */}
        {data
          .filter((art: IStreetArt) => {
            /* Search filters */
            return (
              art?.properties.title.includes(artSearchQuery) &&
              art?.properties.ward.includes(wardSearchQuery) &&
              art?.properties.program.includes(programSearchQuery)
            );
          })
          .map((art: IStreetArt, index: number, arr) => {
            if (!art) {
              return <p className="text-white">Nothing to display</p>;
            }
            return (
              <CardDisplay
                key={index}
                id={art?.id}
                title={art?.properties.title}
                icon={art?.properties.media[0].thumbnails.large.url}
                address={art?.properties.address}
                year={art?.properties.year}
                isLiked={likeData.some((elem: ILikes) => {
                  return elem.artId === art?.id;
                })}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MultiDisplay;
