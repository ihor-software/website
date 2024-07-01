import React, { useState, useEffect } from 'react';
import qualifications from '../files/qualifications.json';

const QualificationListComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(qualifications);
    }, []);

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            {data.map((card, index) => (
                <div key={card.id} style={{ display: 'flex', width: '100%', marginBottom: index < data.length - 1 ? '16px' : 0 }}>
                    <div className="educationDate" style={{ flex: '1', textAlign: 'left' }}>{card.date}</div>
                    <div className='educationTextBlock' style={{ flex: '3', textAlign: 'left', marginLeft: '20px' }}>
                        <div className="educationTitle" style={{ fontWeight: 'bold', fontSize: '15px' }}>{card.title}</div>
                        <div className='educationText'>{card.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QualificationListComponent;
