import React from "react";

function Header(props) {
  function onDarkModeClick(event) {
    props.onDarkModeClick(event);
  }
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {props.darkMode ? "Dark" : "Light"}
      </button>
    </header>
  );
}

export default Header;
