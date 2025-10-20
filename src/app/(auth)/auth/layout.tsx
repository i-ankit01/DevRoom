import React from "react";

export default function AuthLayout({children} : {children : React.ReactNode}){
    return (
        <main className="h-screen flex flex-col justify-center items-center bg-zinc-800">
            {children}
        </main>
    )
}