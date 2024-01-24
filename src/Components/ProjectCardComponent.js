import React, { useState } from 'react';

const ProjectCardComponent = ({ imageUrl, title, description, lastUpdated }) => {
    return (
      <div className="card">
        <img className="card-img-top" src={require(`../img/portfolio/${imageUrl}`)} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{lastUpdated}</small>
        </div>
      </div>
    );
  };
  

  export default ProjectCardComponent;