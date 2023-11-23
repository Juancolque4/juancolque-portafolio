import Introduction from "@/components/Introduction"
import { Transition } from "@/components/Transition"

export const metadata = {
  title: "Portafolio Juan Colque",
  description: "Portafolio"
}

export default function Home() {
  return (
    <main className=" h-[100vh]">
      <div className="absolute w-full h-full">
        <Transition/>
        <Introduction />
      </div>
    </main>
  )
}
