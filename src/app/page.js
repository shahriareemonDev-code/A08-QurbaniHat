import Banner from "@/components/Banner";
import Card from "@/components/AnimalCard";
import Image from "next/image";
import AnimalCard from "@/components/AnimalCard";
import FeaturedAnimal from "@/components/FeaturedAnimal";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";

export default function Home() {
  return (
    <>
      <main>
        <Banner> </Banner>
        <FeaturedAnimal> </FeaturedAnimal>
        <QurbaniTips> </QurbaniTips>
        <TopBreeds> </TopBreeds>

        
      </main>
    </>
  );
}
