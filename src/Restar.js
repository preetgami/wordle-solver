import React, { useState } from "react";

function Restar() {
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleSubmit(e) {
    if (!buttonClicked) {
      setButtonClicked(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="cenetr-div">
        <button
          type="submit"
          className={`button ${buttonClicked ? "disabled" : ""}`}
          disabled={buttonClicked}
        >
          Restart game
        </button>
      </form>
    </div>
  );
}

export default Restar;
