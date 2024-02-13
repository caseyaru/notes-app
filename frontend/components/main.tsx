import { Note } from "@/types/note";
import React from "react";
import Card from "./card";

const cards: Note[] = [
  {
    id: "123",
    header: "header1",
    data: "о, это который серый такой?",
    created: new Date(),
  },
  {
    id: "233",
    header: "header2",
    data: "Ничего нового",
    created: new Date(),
  },
  {
    id: "455",
    header: "header3",
    data: "лишь бы бэк и фронт связались пжпж",
    created: new Date(),
  },
];

const Main = () => {
  return (
    <ul className="p-0 w-full grid grid-cols-3 gap-7">
      {cards.map((el) => (
        <Card card={el} key={el.id}/>
      ))}
    </ul>
  );
};

export default Main;
