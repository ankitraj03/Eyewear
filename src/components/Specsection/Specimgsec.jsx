import React, { useState } from 'react';
import image1 from './Specsimg/glasses1Pre.jpg';
import image2 from './Specsimg/img1.jpg';
import image3 from './Specsimg/img2.jpg';
import image4 from './Specsimg/img3.jpg';

function Specimgsec({ initialImage }) {
  const [imag, setImage] = useState(initialImage || image1); 
  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <img
          src={imag}
          alt="Selected"
          className="m-10 w-[400px] border-2 rounded-lg"
        />
      </div>

      <div className="flex justify-center gap-4">
        {[image1, image2, image3, image4].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="w-20 border rounded-md hover:border-[2px] hover:border-black cursor-pointer"
            onClick={() => setImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default Specimgsec;
