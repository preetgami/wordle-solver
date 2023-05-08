import { useState } from "react";
import "./App.css";
import Genfirstword from "./Genfirstword";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import Help from "./Help";
function App() {
  const [drawerIsOpen, setDrawerIsopen] = useState(false);

  const openDrawer = () => {
    setDrawerIsopen(true);
  };

  const closeDrawer = () => {
    setDrawerIsopen(false);
  };
  return (
    <div>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <div className="disp">WORLD SOLVER</div>
      <div className="disp">
        <button className="button-help" onClick={openDrawer}>
          How to use
        </button>
      </div>
      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <Help />
      </SideDrawer>
      <Genfirstword />:
    </div>
  );
}

export default App;
