import React from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

function Frames({ category }) {
  const { data, loading, error } = useFetchData("Data.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;




  const filteredProducts = category
    ? data.filter((product) => 
        product["Category"] && product["Category"].toLowerCase() === category.toLowerCase()
      )
    : data;
  
  
  if (!filteredProducts.length) return <p>No products available</p>; 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((item) => (
        <Link
          to={{
            pathname: `/Specdatails/${item["Product ID"]}`,
          }}
          
          key={item["Product ID"]}
        >
          <div className="card shadow-lg bg-white rounded-lg group">
            <div className="relative overflow-hidden rounded-lg">

              <img
                className="w-full h-auto transition-opacity duration-500 group-hover:opacity-0"
                src={item["Front View"] || "/images/default-image.png"}
                alt={item["Product Name"] || "No Image"}
              />
              <img
                className="absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                src={item["Side View"] || "/images/default-image.png"}
                alt={item["Product Name"] || "No Image"}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item["Product Name"]}</h3>
              <p className="text-sm text-gray-600">{item["Frame Type"]}</p>
              <div className="flex items-center mt-2">
                <p className="text-red-600 font-semibold mr-2">₹{item["Discounted Price (₹)"]}</p>
                <p className="line-through text-gray-400">₹{item["Price (₹)"]}</p>
              </div>
              <p className="text-sm text-gray-400">(incl. of all taxes)</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Frames;
