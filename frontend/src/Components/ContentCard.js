import React from "react";
import "./ContentCard.css";

function ContentCard({ image, title, description, onClick }) {
  return (
    <article className="content-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="content-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="content-card-body">
        <h3 className="content-card-title">{title}</h3>
        <p className="content-card-description">{description}</p>
        <button className="content-card-button" onClick={onClick}>
          See More
        </button>
      </div>
    </article>
  );
}

export default ContentCard;
