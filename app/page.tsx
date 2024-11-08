import { Intro } from "@/components/Intro";
import Subscription from "@/components/Subscription";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">

    <div className="bg-[#F1F5FE] z-0 h-100 sm:h-112.5 rounded-bl-full">
    </div>

    <div className="-translate-y-100 z-10 bg-transparent flex flex-col items-center justify-center">
      <div className="-translate-y-5"><Intro></Intro></div>
      <div className="translate-y-5"><Subscription></Subscription></div>
    </div>

  </div>
  );
}
