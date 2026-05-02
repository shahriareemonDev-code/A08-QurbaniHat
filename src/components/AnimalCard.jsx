import Image from "next/image";
import React from "react";

const AnimalCard = ({ animal }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden w-72">

      <Image
        width={100}
        height={100}
        src={animal.image}
        alt={animal.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">{animal.name}</h2>
        <span class="text-xs font-medium px-2 py-1 rounded-full h-fit bg-green-100 text-gray-800">{animal.breed}</span>

        </div>
        <div className="flex gap-4 items-center mt-2">
          <p className="text-sm flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            {animal.location}
          </p>
          <p className="text-sm flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
          </svg>
            {animal.weight} kg</p>
        </div>

        <p className="text-xl font-bold mt-2 text-green-600">
          ৳{animal.price}
        </p>

        <button className="mt-3 w-full bg-green-500 text-white py-2 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;