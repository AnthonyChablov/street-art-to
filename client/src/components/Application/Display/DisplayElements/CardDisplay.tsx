// @ts-nocheck
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../config/firebase";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useArtStore } from "../../../../store/Art/artStore";
import { useDrawerStore } from "../../../../store/Drawer/drawerStore";
import useWindowSize from "../../../../hooks/useWindowDimensions";
import { addLike } from "../../../../api/Likes/addLike";

interface ICardDisplay {
  id: string;
  title: String;
  icon: string;
  address: String;
  year: number;
  isLiked?: boolean;
}

const CardDisplay = ({
  id,
  title,
  icon,
  address,
  year,
  isLiked,
}: ICardDisplay) => {
  /* State */
  const [liked, setLiked] = useState(isLiked);
  const [minimize, setMinimize] = useState(true);
  const { artId, setArtId, setDisplaySingleArt } = useArtStore();
  const { toggleArtDrawer, setToggleArtDrawer, toggleToast, setToggleToast } =
    useDrawerStore();

  /* Hooks */
  /* Logged in User Info From Firebase */
  const [user] = useAuthState(auth);
  /* Viewport Width */
  const windowWidth = useWindowSize().width;

  function onClickDisplayHandeller() {
    setDisplaySingleArt(true);
    setToggleArtDrawer(!toggleArtDrawer);
    setArtId(id);
  }

  function onClickLikeHandeller() {
    setLiked(!liked);
    setToggleToast(!toggleToast);
    // send request to server to save as liked to counter and remember which user liked it
    addLike(user?.uid, artId);
  }

  function onClickOpenHandeller() {
    setMinimize(!minimize);
  }

  function setCardHeaderWidth(windowWidth) {
    if (windowWidth >= 300 && windowWidth <= 350) {
      return "w-18";
    }
    if (windowWidth > 350 && windowWidth <= 400) {
      return "w-34";
    }
    if (windowWidth > 400 && windowWidth <= 500) {
      return "w-48";
    }
    if (windowWidth > 500 && windowWidth <= 700) {
      return "w-44";
    }
    if (windowWidth > 1100 && windowWidth <= 1300) {
      return "w-44";
    }
    return "w-52";
  }

  return (
    <div className=" rounded-md mb-5 relative overflow-hidden shadow-lg">
      {/* button header */}
      <div
        className=" pt-2 pb-2 absolute top-0 right-0 z-10 w-full flex flex-row-reverse
          text-lg items-start justify-between pl-5 font-bold text-zinc-300"
      >
        <div className="pr-3 flex ">
          {/* Button Group */}
          <IconButton
            onClick={() => {
              onClickOpenHandeller();
            }}
          >
            {minimize ? (
              <KeyboardArrowDownIcon htmlColor="white" fontSize="medium" />
            ) : (
              <RemoveIcon htmlColor="white" fontSize="medium" />
            )}
          </IconButton>
        </div>
        <div
          className="hover:cursor-pointer  inline-block flex-grow"
          onClick={() => {
            onClickOpenHandeller();
          }}
        >
          <span
            className={`block w-14 flex-grow xxs:w-28 xs:w-44 sm:w-48 md:w-36 lg:w-48 xl:w-52 2xl:w-72 pt-1 text-white 
              ${minimize && "truncate"}
            `}
          >
            {title}
          </span>
        </div>
      </div>
      <Button
        className="bg-gradient-to-r from-slate-600 to-zinc-800 hover:bg-gradient-to-tr"
        variant="contained"
        sx={{
          py: 1.1,
          width: "100%",
        }}
        onClick={() => {
          onClickDisplayHandeller();
        }}
      >
        <div className="flex flex-col justify-center h-full w-full">
          <div className="flex items-center justify-between w-full ">
            <div
              className={` text-white absolute z-20 font-bold w-11 hover:underline
                ${
                  windowWidth >= 1100
                    ? "right-16 text-sm mt-[0.125rem]"
                    : "right-16 text-xs top-5"
                } 
                ${!minimize ? "top-4" : "top-4"} 
              `}
            >
              View
            </div>
            <div className="h-52 w-full overflow-hidden my-20 absolute left-0 bg-zinc-500 ">
              <div
                className="absolute top-0 right-0 bottom-0 
                  left-0 z-0 h-full w-full overflow-hidden 
                  bg-gradient-to-r from-slate-800 via-zinc-800 
                  to-zinc-900 opacity-80 brightness-60"
              ></div>
            </div>
          </div>
          <div
            className={`flex  justify-between 
              mb-3 text-sm text-zinc-50 font-roboto
              ${!minimize && "mt-32"}
              ${windowWidth <= 1000 ? "flex-col " : "flex-row items-center"}
            `}
          >
            <p>{year}</p>
            <p>{address}</p>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default CardDisplay;
