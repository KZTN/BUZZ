import React from 'react'
import './styles.scss'
export default function Card({title, seller, photo, description, hashtags}) {
return (
    <div className="card">
    <div className="card-header">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="seller">
        <span>{seller}</span>
      </div>
    </div>
    <div className="card-img">
      <img
        src={photo}
        alt=""
        srcset=""
      />
    </div>
    <div className="card-info">
      <div className="description">
        <p>
          {description}
        </p>
      </div>
      <div className="hashtags">
        <span>
          <strong>{hashtags}</strong>
        </span>
      </div>
    </div>
    </div>
);
}