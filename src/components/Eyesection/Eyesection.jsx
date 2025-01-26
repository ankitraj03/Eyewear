import React from 'react';
import { useParams } from 'react-router-dom';
import Frames from './Frames';

function Eyesection() {
    const { id } = useParams();


    const categoryMap = {
        1: 'eyeglasses',
        2: 'sunglasses',
        3: 'Screen Glasses',
        4: 'Contact Lenses',
        5: 'Power Glasses',
        6: 'Progressive Glasses',
    };

    const category = categoryMap[id];

    if (!category) {
        return <div>Product category not found</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 capitalize">{category.replace('_', ' ')}</h1>
            <Frames category={category} />
        </div>
    );
}

export default Eyesection;
