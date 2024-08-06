import React from "react";
import SiteHeadData from "./SiteHeadData";
import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

type SiteLayoutProps = {
  children: ReactNode;
};

function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="text-black relative flex flex-col min-h-[100dvh]">
      <SiteHeadData />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default SiteLayout;
