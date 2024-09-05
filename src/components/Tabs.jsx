import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-around mb-6">
                <button
                    className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeTab === 'about'
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                        }`}
                    onClick={() => setActiveTab('about')}
                >
                    About Me
                </button>
                <button
                    className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeTab === 'experience'
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                        }`}
                    onClick={() => setActiveTab('experience')}
                >
                    Experiences
                </button>
                <button
                    className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeTab === 'recommended'
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                        }`}
                    onClick={() => setActiveTab('recommended')}
                >
                    Recommended
                </button>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-inner">
                {activeTab === 'about' && <div>About Me content here. Main intro and details.</div>}
                {activeTab === 'experience' && <div>Experience content here. Show some achievements.</div>}
                {activeTab === 'recommended' && <div>Recommended content here. Add testimonials or reviews.</div>}
            </div>
        </div>
    );
};

export default Tabs;
