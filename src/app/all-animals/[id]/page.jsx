import React from 'react';
import Image from 'next/image';

const AnimalDetailsPage = async ({params}) => {
    const {id}= await params;
     const res = await fetch("https://a08-qurbani-hat-e69y.vercel.app/data.json");

  const animals = await res.json();
  const animal = animals.find(p => p.id == id)

    
    return (
        <div className='site-wrapper card items-center border solid'>
            <h1 className='py-10 text-4xl font-bold text-green-500'>Animal <span className='text-orange-500'>Details</span></h1>
            <div className="relative w-100 h-50 mx-auto">
                <Image
                          fill
                          src={animal.image}
                          alt={animal.name}
                          className="rounded-xl object-cover"
                          loading="eager"
                         />
            </div>
             <div className='text-center p-5 m-2'>
                         <h1 className='font-semibold text-xl '>{animal.name}</h1>
                         <p className='font-semibold'>{animal.type}</p>
                         <p>{animal.age} Years</p>
                         <p>{animal.category}</p>
                         <p>{animal.description} </p>
                         <p className='font-bold text-green-500'> TK-{animal.price} </p>

             </div>
            
        </div>
    );
};

export default AnimalDetailsPage;