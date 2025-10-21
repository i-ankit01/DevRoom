import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LogoutButtonProps } from "../types";


export default function LogoutButton({children} : LogoutButtonProps){

    const router = useRouter();

    const onLogout = async ()=>{
        await signOut()
        router.refresh()
    }

    return (
        <div>
            <span className="cursor-pointer" onClick={onLogout}>
            {children}
            </span>
        </div>
    )
}