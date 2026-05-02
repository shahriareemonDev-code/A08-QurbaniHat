import AnimalCard from "./AnimalCard";


const FeaturedAnimal = async() => {
    const res = await fetch('https://a08-qurbani-hat.vercel.app/data.json'); 
   
    const animals = await res.json()
    const topAnimals = animals.slice(0, 4)
    
    return (
        <div>
            <h1 className="text-2xl font-semibold">Featured Animals</h1>

            <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-5">
                {
                    topAnimals.map(animal => <AnimalCard key={animal.id} animal= {animal}> </AnimalCard> ) 
                }
            </div>

        </div>
    );
};

export default FeaturedAnimal;