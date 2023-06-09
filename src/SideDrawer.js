import React from "react";
import "./SideDrawer.css";
import "./display.css";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

export default function SideDrawer(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={0}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    > 
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}
