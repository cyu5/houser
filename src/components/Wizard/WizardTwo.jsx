import React from "react";
import { Link } from "react-router-dom";

export default function WizardTwo(props) {
  const { img } = props;
  const { updateInput } = props;

  return (
    <div className="WizardTwo">
      <p>Image</p>
      <input value={img} onChange={e => updateInput(e.target.value, "image")} />

      <Link to="/Wizard">
        <button>Previous</button>
      </Link>
      <Link to="/Wizard/step3">
        <button>Next</button>
      </Link>
    </div>
  );
}
