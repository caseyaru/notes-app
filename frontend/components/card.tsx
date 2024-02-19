"use client"

import { Note } from "@/types/note";
import React, { useState } from "react"
import CardPopup from "./cardPopup";
import { getPopups } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopup } from "@/store/popupSlice";

const Card = ({card}: {card: Note}) => {
  const { showPopup } = useSelector(getPopups);
  const dispatch = useDispatch();
  
  const handleCardClick = () => {
    dispatch(setShowPopup(card.id));
  };

  return (
    <>
    <li
          className="bg-white p-5 rounded-md shadow-sm box-border cursor-pointer hover:border-[1px] hover:border-dark"
          onClick={handleCardClick}
        >
          <p className="font-semibold text-lg">{card.header}</p>
          <p>{card.data}</p>
    </li>
    {showPopup === card.id && <CardPopup card={card}/>}
    </>
  )
};

export default Card;
