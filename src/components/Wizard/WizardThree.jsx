import React from "react";
import { Link } from "react-router-dom";

export default function WizardThree(props) {
  const { mortgage, rent } = props; // passed down states
  const { completeWizard, updateInput } = props; // passed down methods

  return (
    <div className="WizardThree">
      <p>Mortgage</p>
      <input
        type="number"
        value={mortgage}
        onChange={e => updateInput(e.target.value, "mortgage")}
      />
      <p>Rent</p>
      <input
        type="number"
        value={rent}
        onChange={e => updateInput(e.target.value, "rent")}
      />

      <Link to="/wizard/step2">
        <button>Previous</button>
      </Link>
      <Link to="/">
        <button onClick={completeWizard}>Complete</button>
      </Link>
    </div>
  );
}
