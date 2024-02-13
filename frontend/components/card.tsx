import { Note } from "@/types/note";
import React from "react"

const Card = ({card}: {card: Note}) => {
  return (
    <li
          className="bg-white p-5 rounded-md shadow-sm box-border cursor-pointer hover:border-[1px] hover:border-dark"
        >
          <p className="font-semibold text-lg">{card.header}</p>
          <p>{card.data}</p>
        </li>
  )
};

export default Card;
