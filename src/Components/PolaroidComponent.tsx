import React, { useState } from 'react';
import '../style/css/style.css';

interface PolaroidGalleryProps {
    photos: { url: string, title: string, date: string }[];
}

const PolaroidGallery: React.FC<PolaroidGalleryProps> = ({ photos }) => {
    const [currentIndex, setCurrentIndex] = useState(photos.length - 1);

    const swipePolaroid = (direction: 'left' | 'right') => {
        const newPolaroids = [...photos];
        newPolaroids[currentIndex].url += ` swipe-${direction}`;

        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
        }, 300);
    };

    return (
        <div className="gallery">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`polaroid ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => swipePolaroid('left')}
                >
                    <div className="frame" style={{ width: '302px', height: '302px', border: '1px solid orange' }}>
                        <div className="image" style={{ backgroundImage: `url(${photo.url})` }}></div>
                    </div>
                    <h3>{photo.title}</h3>
                    <p>{photo.date}</p>
                </div>
            ))}
        </div>
    );
};

export default PolaroidGallery;
