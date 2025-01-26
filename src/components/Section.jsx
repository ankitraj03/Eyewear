import images from './Images';
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/img1.png';
import Image2 from '../img/immg.jpg';

function Section() {
    const cardsData = [
        { id: 1, title: "Eyeglasses", description: "Stylish and modern eyeglasses for daily use.", image: images.eyelass },
        { id: 2, title: "Sunglasses", description: "Trendy sunglasses to protect your eyes.", image: images.sunglass },
        { id: 3, title: "Screen Glasses", description: "Glasses designed for screen protection.", image: images.contactlens },
        { id: 4, title: "Contact Lenses", description: "Comfortable and clear contact lenses.", image: images.screenglass },
        { id: 5, title: "Power Sunglasses", description: "Sunglasses with power for sharp vision.", image: images.powersun },
        { id: 6, title: "Progressive Lenses", description: "Lenses with progressive power adjustment.", image: images.proglens },
    ];

    return (
        <div className="bg-[#f4f4f4] text-[#333]">
           
            <img
                src={Image2}
                alt="Hero Image"
                className="w-full h-[300px] object-cover"
            />

            {/* Section Title */}
            <div className="text-center py-6">
                <h3 className="text-3xl font-bold text-[#383736]">Our Products</h3>
                <p className="text-gray-500 mt-2">Explore our wide range of eyewear</p>
            </div>

            {/* Product Cards */}
            <div className="card-container mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {cardsData.map((card) => (
                    <Link to={`/Eyesection/${card.id}`} key={card.id}>
                        <div className="card shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-5 rounded-lg">
                         
                            <img
                                className="w-full h-[200px] object-cover rounded-lg mb-4"
                                src={card.image}
                                alt={card.title}
                            />
                          
                            <h3 className="text-xl font-bold text-[#383736] mb-2">
                                {card.title}
                            </h3>
                         
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer Image */}
            <img
                src={Image}
                alt="Footer Image"
                className="w-full h-[300px] object-cover mt-6"
            />
        </div>
    );
}

export default Section;
