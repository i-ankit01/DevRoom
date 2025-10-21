import Footer from "@/features/landing/components/Footer";
import Header from "@/features/landing/components/Header";
import React from "react";

export default function LandingLayout({children} : {children : React.ReactNode}){
    return(
        <>
        <Header/>
        <main className="z-20 relative pt-0 md:pt-0 bg-black">
            {children}
        </main>
        <Footer/>
        </>
    )
}