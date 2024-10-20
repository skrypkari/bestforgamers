import Header from "@/components/Main/Header";
import Main from "@/components/Main/Main";
import History from "@/components/Main/History";
import Faq from "@/components/Main/Faq";
import React from "react";

export default function Home() {
  return (
    <>
        <Header/>
        <Main/>
        <History/>
        <Faq/>
    </>
  );
}
