import React from "react";
import Catalog from "./_components/Catalog";
import StoreProvider from "@/app/_redux/StoreProvider";
import Header from "@/app/_global/header/Header";

type Props = {};

export default function MainPage({}: Props) {
  return (
    <>
      <StoreProvider>
        <Header />
      </StoreProvider>
      <div className="w-full pt-10 flex justify-center">
        <div>
          <Catalog />
        </div>
      </div>
    </>
  );
}
