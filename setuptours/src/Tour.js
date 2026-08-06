import React, { useState } from "react";

const Tour = ({
  id,
  name,
  username,
  address,
  phone,
  website,
  company,
  removeTour,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <h2>ID: {id}</h2>
      <h2>Name:{name}</h2>
      <h2>Username:{username}</h2>
      <h2>
        Address:
        <h2>Street:{address.street}</h2>
        <h2>suite:{address.suite}</h2>
        <h2>city:{address.city}</h2>
        <h2>Zipcode:{address.zipcode}</h2>
        <h2>
          Geo:
          <h2>lat:{address.geo.lat}</h2>
          <h2>lng: {address.geo.lng}</h2>
        </h2>
      </h2>

      <h2>Phone:{phone}</h2>
      <h2>website:{website}</h2>
      <h2>
        Company:
        <h2>name:{company.name}</h2>
        <h2>
          catchPhrase:
          {readMore
            ? company.catchPhrase
            : `${company.catchPhrase.substring(0, 5)}`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "ReadLess" : "ReadMore"}
          </button>
        </h2>
        <h2>bs:{company.bs}</h2>
      </h2>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        Not interested
      </button>
    </div>
  );
};

export default Tour;

/* id,
  name,
  username,
  email,
  address: {
    street,
    suite,
    city,
    zipcode,
    geo: { lat, lng },
  },
  phone,
  website,
  company: { name, catchPhrase, bs },*/
