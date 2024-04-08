import React from "react";

function Header({ onBackClick }) {
  return (
    <header style={headerStyle}>
      <div style={leftStyle}>Auth0</div>
      <div style={rightStyle}>
        <button onClick={onBackClick}>Back</button>
      </div>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "D862BC",
  color: "white",
};

const leftStyle = {
  flex: "1",
  textAlign: "left",
};

const rightStyle = {
  flex: "1",
  textAlign: "right",
};

export default Header;
