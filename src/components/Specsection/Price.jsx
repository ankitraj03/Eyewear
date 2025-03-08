import React, { useState, useEffect } from "react";
import image from "./Specsimg/side.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

function Price({ globalUsername, title, price, original }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (globalUsername) {
      const userWishlistKey = `wishlist_${globalUsername}`;
      const storedWishlist = JSON.parse(localStorage.getItem(userWishlistKey)) || [];
      setWishlist(storedWishlist);
    }
  }, [globalUsername]);

  const toggleWishlist = () => {
    if (!globalUsername) {
      alert("Please log in to add items to your wishlist.");
      return;
    }

    const userWishlistKey = `wishlist_${globalUsername}`;
    let storedWishlist = JSON.parse(localStorage.getItem(userWishlistKey)) || [];
    const item = { title, price, original, image };

    if (storedWishlist.some((w) => w.title === title)) {
      storedWishlist = storedWishlist.filter((w) => w.title !== title);
    } else {
      storedWishlist.push(item);
    }

    localStorage.setItem(userWishlistKey, JSON.stringify(storedWishlist));
    setWishlist(storedWishlist);
  };

  return (
    <div className="m-10 ml-2 flex flex-col items-center md:flex-row md:justify-between">
      <div className="w-auto">
        <h1 className="text-4xl font-serif font-bold text-[#383836] mb-4">{title}</h1>
        <div className="flex justify-between text-2xl mb-4">
          <div className="flex">
            <h2 className="text-[#5e5e5c] line-through mr-2">{original}</h2>
            <h2 className="font-bold text-[#ed824c] text-3xl">{price}</h2>
          </div>
          <div>
            <FontAwesomeIcon
              icon={wishlist.some((w) => w.title === title) ? faSolidHeart : faRegularHeart}
              className="text-3xl hover:text-red-600 cursor-pointer"
              onClick={toggleWishlist}
            />
          </div>
        </div>
        <div className="mb-6 flex justify-start">
          <img src={image} alt="Specs" className="w-80 rounded-lg shadow-lg" />
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#ed824c] text-white w-[200px] p-4 rounded-xl hover:bg-[#f2702e] transition-all">
            Add to Cart
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-[200px] p-4 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all">
            3D Try On
          </button>
        </div>
      </div>
    </div>
  );
}

export default Price;
