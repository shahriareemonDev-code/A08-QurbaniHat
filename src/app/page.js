import Banner from "@/components/Banner";
import Card from "@/components/AnimalCard";
import Image from "next/image";
import AnimalCard from "@/components/AnimalCard";

export default function Home() {
  const animal = {
    id: 1,
    name: "Deshi Cow",
    breed: "Hariana",
    price: 120000,
    weight: 280,
    location: "Bogura",
    image: "https://images.unsplash.com/photo-1593768697824-f31b967e6c55",
  };

  return (
    <div>
      <Banner> </Banner>
      <div className="flex justify-center mt-10">
        <AnimalCard animal={animal} />
      </div>
    </div>
  );
}
