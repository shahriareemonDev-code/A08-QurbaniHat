import { Card } from '@heroui/react';
import Image from 'next/image';

const AnimalCard = ({animal}) => {
  
  return (
    <Card className='border rounded-2xl'> 
         <div className='relative'>
          <Image 
          width={100}
          height={100}
          src={animal.image}
          alt={animal.description} 
          className='rounded-2xl'
          loading="eager"
          />
         </div>
         
         <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold leading-tight">{animal.name}</h3>
          <span className="shrink-0 text-xs font-medium px-2 py-1 rounded-full bg-green-600 text-accent-foreground">{animal.breed}</span>
          </div>
          <div className='flex justify-between'>
             <p className='flex text-gray-700'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
 {animal.location}</p>
          <p className='flex text-gray-700 gap-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
</svg>
 
            {animal.weight}Kg</p>
          </div>
          
         
    </Card>
  );
};

export default AnimalCard;