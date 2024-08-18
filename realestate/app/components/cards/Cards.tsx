"use client";

interface CardsProps {
  imageUrl: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
}

const Cards: React.FC<CardsProps> = ({ imageUrl, title, price, bedrooms, bathrooms, sqft, address }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-xs bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative overflow-hidden rounded-t-lg">
        <img src={imageUrl} alt={title} width={400} height={300} className="rounded-t-lg object-cover" />
      </div>
      <div className="pt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-lg mb-2 font-semibold">${price.toLocaleString()}</p>
        <div className="flex justify-between text-gray-600 mb-4">
          <p>{bedrooms} Beds</p>
          <p>{bathrooms} Baths</p>
          <p>{sqft} Sqft</p>
        </div>
        <p className="text-gray-500 text-sm">{address}</p>
      </div>
    </div>
  );
}

export default Cards;
