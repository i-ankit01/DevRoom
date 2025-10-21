import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const handleGoogleLogin = async ()=>{
    'use server'
    await signIn("google")
}

export default function SignInForm(){
    return (
        <form action={handleGoogleLogin}>
            <Button>Login with google</Button>
        </form>
    )
}