import React from "react";
import { Link } from "react-router-dom";

export default function WizardOne(props) {
  const { name, address, city, state, zip } = props;
  const { updateInput } = props;
  return (
    <div className="WizardOne">
      <p>Property Name</p>
      <input value={name} onChange={e => updateInput(e.target.value, "name")} />
      <p>Address</p>
      <input
        value={address}
        onChange={e => updateInput(e.target.value, "address")}
      />
      <p>City</p>
      <input value={city} onChange={e => updateInput(e.target.value, "city")} />
      <p>State</p>
      <input
        maxLength="2"
        value={state}
        onChange={e => updateInput(e.target.value, "state")}
      />
      <p>Zip</p>
      <input
        type="number"
        maxLength="6"
        value={zip}
        onChange={e => updateInput(e.target.value, "zip")}
      />

      <Link to="/wizard/step2">
        <button>Next</button>
      </Link>
    </div>
  );
}
