import { Note } from "@/types/note";
import React from "react";
import { IconPencil, IconTrashFilled } from '@tabler/icons-react';

const CardPopup = ({ card }: { card: Note }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center z-10 bg-shadow">
      <div className="w-3/4 h-3/4 bg-white m-auto py-4 px-5">
        <div className="flex flex-row gap-3 justify-end">
          <IconPencil width="35" height="35" />
          <IconTrashFilled width="35" height="35" />
        </div>
        {card.data}
      </div>
    </div>
  );
};

export default CardPopup;
