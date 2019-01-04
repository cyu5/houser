import React, { Component } from "react";

export default function House(props) {
  const { id, name, address, city, state, zip, img, mortgage, rent } = props.house;
  const { deleteHouse } = props;
  return (
    <div className="House">
      <p>Property Name: {name}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zip}</p>
      <p>img: {img}</p>
      <p>mortgage: {mortgage}</p>
      <p>rent: {rent}</p>
      <button onClick={() => deleteHouse(id)}>X</button>
    </div>
  );
}
