"use client"

import CardPopup from "@/components/cardPopup";
import Header from "@/components/header";
import Main from "@/components/main";
import store from "@/store";
import Image from "next/image";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Main />
        {/* <CardPopup /> */}
      </div>
    </main>
    </Provider>
  );
}
