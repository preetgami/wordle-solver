import React from "react";
import GenNextword from "./GenNextword";

import { useState } from "react";
import "./display.css";
function Nextword(props) {
  const [showComponents, setShowComponents] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!buttonClicked) {
      setShowComponents(true);
      setButtonClicked(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="cenetr-div">
        <button
          type="submit"
          className={`button ${buttonClicked ? "disabled" : ""}`}
          disabled={buttonClicked || !props.show}
        >
          Genearte next word
        </button>
      </form>
      {showComponents && (
        <>
          <GenNextword color={props.color} guess={props.guess} />
        </>
      )}
    </div>
  );
}

export default Nextword;
