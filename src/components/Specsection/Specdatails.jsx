import React from 'react';
import { useParams } from 'react-router-dom';
import Specimgsec from './Specimgsec';
import Price from './Price';
import useFetchData from '../../hooks/useFetchData';

function Specdatails() {
  const { id } = useParams();
  const { data, loading, error } = useFetchData("Data.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter the product by ID
  const filteredProducts = id
    ? data.filter(
        (product) =>
          product["Product ID"] &&
          product["Product ID"].toLowerCase() === id.toLowerCase()
      )
    : [];

  // Get the first product (if any)
  const product = filteredProducts[0];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div className="flex justify-left p-3">
        <Specimgsec initialImage={product["Front View"]} />
        <Price
          title={product["Product Name"]}
          price={product["Discounted Price (₹)"]}
          original={product["Price (₹)"]}
        />
      </div>
      {product["Front View"] && (
        <img
          src={product["Front View"]}
          alt="Trust Image"
          className="m-10 mt-2"
        />
      )}
    </>
  );
}

export default Specdatails;
