import AnimalCard from "./AnimalCard";

const FeaturedAnimal = async () => {
  const res = await fetch("https://a08-qurbani-hat.vercel.app/data.json");

  const animals = await res.json();
  const topAnimals = animals.slice(0, 4);

  return (
    <div className="site-wrapper ">
     <div className=" text-center">
         <h1 className="text-4xl font-bold py-10 text-green-500 ">Featured <span className="text-orange-500 text-5xl">Animals</span></h1>
     </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5">
        {topAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimal;
