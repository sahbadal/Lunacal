import React, { useState } from 'react';

const Gallery = () => {
    const [images, setImages] = useState([
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
    ]);

    const addImage = () => {
        const newImage = 'https://via.placeholder.com/150'; // new image URL
        setImages([...images, newImage]);
    };

    const goLeft = () => {
        // Left arrow functionality here
    };

    const goRight = () => {
        // Right arrow functionality here
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Gallery</h2>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={addImage}
                        className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-500 transition duration-300"
                    >
                        + Add Image
                    </button>
                    <button
                        onClick={goLeft}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={goRight}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery item ${index}`}
                        className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
