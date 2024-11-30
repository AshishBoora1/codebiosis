"use client";
import React, { useEffect, useState } from "react";

import Preloader from "@/components/preloader";
import { useRouter } from "next/navigation";
import Footer from "./_sections/FooterSection";
import SmoothWrapper from "./_components/SmoothWrapper";
import NavigationBar from "./_components/navigationbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  return (
    <>
      <Preloader />
       <SmoothWrapper>
      <div className="md:px-20">
        <NavigationBar />
        {children}
        <Footer />
      </div>
      </SmoothWrapper>
    </>
  );
};

export default MainLayout;
