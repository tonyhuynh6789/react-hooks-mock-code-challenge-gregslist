import React, {useState} from "react";


function ListingCard({item, deleteFunction}) {

    const {description, image, location, id} = item
    const [favorited, setFavorited] = useState(false)

    function handleClick () {
      setFavorited((favorited => !favorited))
    }

    function deleteItem () {
      fetch(`http://localhost:6001/listings/${id}`, {
        method: "DELETE"
      })
      .then(resp => resp.json())
      .then( () => {
        deleteFunction(id)
      })
    }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span>  {location}</span>
        <button onClick={deleteItem} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
