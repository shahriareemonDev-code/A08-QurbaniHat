

const FeaturedAnimal = async() => {
    const res = await fetch('https://a08-qurbani-hat.vercel.app/data.json', {cache: "no-store"}); 
   
    const animals = await res.json()
    const topAnimals = animals.slice(0, 4)
    
    return (
        <div>
            <h1 className="text-2xl font-semibold">Featured Animals</h1>

            <div className="grid grid-cols-4 gap-4">
                {
                    topAnimals.map(animal => <div key={animal.id} > 
                        <img className="rounded-t-xl overflow-hidden w-full object-cover" src={animal.image} alt="animal.name" />
                        <p>Name- {animal.name}</p>
                        <p>Breed- {animal.breed}</p>
                        <p>{animal.location}</p>
                        <p>{animal.weight}</p>
                        <h2>TK{animal.price}</h2>
                        
                        
                         </div> )
                }
            </div>

        </div>
    );
};

export default FeaturedAnimal;