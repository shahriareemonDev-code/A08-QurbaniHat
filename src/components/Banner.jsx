import Image from 'next/image';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-yellow-50 px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      
      
      <div>
       

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Qurbani made <br />
          <span className="text-green-600">simple</span> & trusted.
        </h1>

        <p className="text-gray-600 mt-6 max-w-md">
          Browse healthy, ethically-raised cows and goats from verified Bangladeshi farms. Transparent pricing. Doorstep delivery.
        </p>

       
        

       
        <div className="flex gap-10 mt-10 text-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-green-600">500+</h2>
            <p className="text-sm text-gray-500">Animals</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-600">64</h2>
            <p className="text-sm text-gray-500">Districts</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-600">100%</h2>
            <p className="text-sm text-gray-500">Verified</p>
          </div>
        </div>
      </div>

    
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9"
          alt="Qurbani cow"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Banner;