import React, { useState, useEffect } from 'react';
import ProjectCardComponent from './ProjectCardComponent';
import projects from '../files/projects.json';

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projects);
  }, []);

  return (
    <div className="container">
    {data.map((card, index) => (
      <div key={card.id} style={{ marginBottom: index < data.length - 1 ? '16px' : 0 }}>
        <ProjectCardComponent
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          lastUpdated={card.lastUpdated}
        />
      </div>
    ))}
  </div>
  );
};

export default CardList;
