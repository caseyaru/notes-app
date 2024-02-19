import { Note } from "@/types/note";
import React from "react";
import { setShowPopup } from "@/store/popupSlice";
import { IconPencil, IconTrashFilled, IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { getPopups } from "@/store";

const CardPopup = ({ card }: { card: Note }) => {
  const { showPopup } = useSelector(getPopups);
  const dispatch = useDispatch();
  
  const handleClose = () => {
    dispatch(setShowPopup(false));
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center z-10 bg-shadow">
      <div className="w-3/4 h-3/4 bg-white mx-auto py-4 px-5 rounded-md relative">
        <div className="py-4 px-5 overflow-auto h-[90%]">
          <h2 className="text-4xl font-bold">{card.header}</h2>
          <p className="text-xl mt-2">{card.data}</p>
        </div>
        <div className="flex flex-row gap-3 justify-end py-1">
          <button>
            <IconPencil width="35" height="35" />
          </button>
          <button>
            <IconTrashFilled width="35" height="35" />
          </button>
        </div>
        <button className="absolute top-0 -right-12" onClick={handleClose}>
          <IconX width="45" height="55" className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CardPopup;
