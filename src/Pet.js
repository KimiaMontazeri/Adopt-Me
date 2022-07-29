import React from "react";
import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg"; // default image
  if (images.length) {
    hero = images[0];
  }

  return (
    // we use react router here
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={hero} alt={name} className="shadow-lg"/>
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1> {name} </h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
