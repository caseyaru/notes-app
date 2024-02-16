"use client"

import { Note } from "@/types/note";
import React, { useState } from "react"
import CardPopup from "./cardPopup";

const Card = ({card}: {card: Note}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <li
          className="bg-white p-5 rounded-md shadow-sm box-border cursor-pointer hover:border-[1px] hover:border-dark"
          onClick={() => setIsOpen(true)}
        >
          <p className="font-semibold text-lg">{card.header}</p>
          <p>{card.data}</p>
    </li>
    {isOpen && <CardPopup card={card}/>}
    </>
  )
};

export default Card;
