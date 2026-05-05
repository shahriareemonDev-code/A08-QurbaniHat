import AnimalCard from "./AnimalCard";

const TopBreeds = async () => {

  const res = await fetch(
    "https://a08-qurbani-hat-e69y.vercel.app/data.json"
  );

  const animals = await res.json();

  const topBreedAnimals = animals.slice(0, 3);

  return (
    <div className="site-wrapper">

      <div className="text-center">
        <h1 className="text-4xl font-bold py-10 text-green-500">
          Top <span className="text-orange-500 text-5xl">Breeds</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topBreedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

    </div>
  );
};

export default TopBreeds;