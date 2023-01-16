import React, { useState } from "react";

function ListingCard({listingItem, onDeleteListing}) {

  const {id,description, image, location}= listingItem

  const [isFavorite, setIsFavorite] = useState(true);

  function handleClick(){
    setIsFavorite(isFavorite => !isFavorite);
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDeleteListing(listingItem))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
