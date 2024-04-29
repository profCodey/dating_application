import HomeCard from "@/components/user/homepage/cards";
import Slider from "@/components/user/homepage/hero/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Slider />
      <HomeCard />
    </>
  );
}
