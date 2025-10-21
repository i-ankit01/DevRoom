import UserProfile from "@/features/auth/components/UserProfile";
import Features from "@/features/landing/components/Features";
import Hero from "@/features/landing/components/Hero";

export default async function Home() {

  return(
    <div>
      <UserProfile/>
      <Hero/>
      <Features/>
    </div>
  )
}
