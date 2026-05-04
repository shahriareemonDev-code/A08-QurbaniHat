import AnimalCard from '@/components/AnimalCard';
import React from 'react';

const AllAnimalsPage = async() => {
    const res = await fetch("https://a08-qurbani-hat-e69y.vercel.app/data.json");

  const animals = await res.json();
    return (
        <div className='site-wrapper'>
           <div className='my-5 text-center'>
            <h1 className='font-bold text-4xl py-5 text-green-500'> ALL <span className='font-semibold text-4xl text-orange-500'>Animals</span></h1>
           </div>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                animals.map(animal => <AnimalCard key={animal.id} animal={animal}> </AnimalCard>)
            }
           </div>
        </div>
    );
};

export default AllAnimalsPage;