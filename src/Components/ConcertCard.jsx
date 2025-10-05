// src/components/ContentCard.jsx
import React from 'react';

const ContentCard = ({ categories }) => (
    <div className="flex space-x-2 overflow-x-auto py-2">
        {categories.map((category) => (
            <button
                key={category}
                className="bg-white text-black text-sm font-semibold rounded-full px-4 py-2 whitespace-nowrap border border-neutral-700 hover:bg-neutral-700 transition-colors"
            >
                {category}
            </button>
        ))}
    </div>
);

export default ContentCard;