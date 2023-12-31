import Link from "next/link";

import Image from "next/image";
import Hero from "../components/Hero";
import JoinUs from "../components/JoinUs";
import Video from "../components/LandingPageVideo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Hero />
      <Video />
      <JoinUs />
    </main>
  );
}