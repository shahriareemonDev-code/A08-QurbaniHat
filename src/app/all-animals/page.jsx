import AnimalCard from '@/components/AnimalCard';
import React from 'react';

const AllAnimalsPage = async() => {
    const res = await fetch("https://a08-qurbani-hat.vercel.app/data.json");

  const animals = await res.json();
    return (
        <div className='site-wrapper'>
           <h1 className='font-bold text-4xl py-5 text-green-500'> ALL <span className='font-semibold text-4xl text-orange-500'>Animals</span></h1>
           <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            {
                animals.map(animal => <AnimalCard key={animal.id} animal={animal}> </AnimalCard>)
            }
           </div>
        </div>
    );
};

export default AllAnimalsPage;