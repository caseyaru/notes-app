import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-5 py-4 w-full bg-dark">
      <p className="text-white font-extrabold text-xl">My notes</p>
      <nav>
        <ul className="flex flex-row justify-between gap-4 text-white font-medium px-4">
          <li>
            <a href="/">Заметки</a>
          </li>
          <li>
            <a href="profile">Профиль</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
