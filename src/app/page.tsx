"use client"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  const goOutSite = ()=>{
    router.push("/blog")
  }
  return (
    <div>
      <button onClick={goOutSite}>Go Desktop</button>
    </div>
  );
}
