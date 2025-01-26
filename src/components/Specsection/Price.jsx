import React, { useState } from "react";
import image from "./Specsimg/side.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import Wishlist from "../Wishlist/Wishlist";

function Price({ title, price, original }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const [isLiked, setIsLiked] = useState(false);

  const sections = [
    { title: "Technical Information", content: "Technical details about the product." },
    { title: "Visit Nearby Store", content: "Locate stores near your area." },
    { title: "Check Delivery Options", content: "Delivery options available for your location." },
    { title: "Review (516)", content: "View reviews and ratings for this product." },
  ];

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
              icon={isLiked ? faSolidHeart : faRegularHeart}
              className="text-3xl hover:text-red-600 cursor-pointer"
              onClick={() => setIsLiked(!isLiked)}

            />
          </div>
        </div>
        <div className="mb-6 flex justify-start">
          <img src={image} alt="Specs" className="w-80 rounded-lg shadow-lg" />
          <div className="md:w-1/3 mt-10 md:mt-0 ml-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-4 cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">{section.title}</span>
                  <span>{openSection === index ? "-" : "+"}</span>
                </div>
                {openSection === index && (
                  <div className="mt-2 text-sm text-gray-600">{section.content}</div>
                )}
              </div>
            ))}
          </div>
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
