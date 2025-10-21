"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect , useState } from "react";


export function ThemeToggle(){
    const {setTheme , theme} = useTheme();
    const [mounted , setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    } , []);

    if(!mounted){
        return null;
    }

    return (
        <div 
        className="cursor-pointer"
        onClick={()=>{
            setTheme(theme === "light" ? "dark" : "light");
        }}
        >
            {
                theme === "light" ? (<IconMoon className="h-5 w-5 text-black"/>) : (<IconSun className="h-5 w-5 text-white" color="white"/>)
            }
        </div>
    )
}