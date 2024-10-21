import Header from "@/components/Main/Header";
import Main from "@/components/Main/Main";
import History from "@/components/Main/History";
import Faq from "@/components/Main/Faq";
import React from "react";
import {DataProvider} from "@/context/DataProvider";

export default function Home() {
  return (
    <DataProvider>
        <Header/>
        <Main/>
        <History/>
        <Faq/>
    </DataProvider>
  );
}
