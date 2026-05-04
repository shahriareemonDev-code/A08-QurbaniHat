import { Card } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

const AnimalCard = ({animal}) => {
  return (
    <Card className="border rounded-2xl p-4 space-y-3">
      
      <div className="relative w-full aspect-square">
        <Image
          fill
          src={animal.image}
          alt={animal.name}
          className="rounded-xl object-cover"
        />
      </div>

      <div className="flex justify-between gap-3">
        <h3 className="text-lg font-semibold">{animal.name}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-green-600 text-white">
          {animal.breed}
        </span>
      </div>

      <div className="flex justify-between text-gray-700 text-sm">
        <p>{animal.location}</p>
        <p>{animal.weight} Kg</p>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-green-600">
          TK-{animal.price}
        </h2>

        <Link
          href={`/all-animals/${animal.id}`}
          className="bg-green-600 py-1 px-3 rounded-xl text-white text-sm"
        >
          Details
        </Link>
      </div>

    </Card>
  );
};

export default AnimalCard;