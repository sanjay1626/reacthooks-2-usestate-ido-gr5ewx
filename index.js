import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";

const App = () => {
  const [colors, setColor] = useState([
    "red",
    "yellow",
    "green",
    "pink",
    "blue",
    "purple"
  ]);

  const [state, setState] = useState({
    name: "",
    profile: "pink",
    header: "purple",
    showToolbar: false
  });

  const changeName = event => {
    useState({ name: event.target.value });
  };

  const toggleToolbar = () => {
    useState({
      showToolbar: !useState.showToolbar
    });
  };

  const changeProfile = event => {
    useState({
      profile: event.target.value
    });
  };

  const changeHeader = event => {
    useState({
      header: event.target.value
    });
  };

  
const { name, background, profile, header, showToolbar } = state;
  return (
    
    <div className="wrapper">
      {showToolbar && <div className="toolbar">Tools</div>}

      <div className="main">
        <div style={{ background: header }} className="header">
          <div style={{ background: profile }} className="profile" />

          <div className="name">{name === "" ? "set your name" : name}</div>
        </div>

        <div className="center">
          <button onClick={toggleToolbar}>
            {showToolbar ? "hide" : "show"} toolbar
          </button>

          <input
            onChange={changeName}
            value={name}
            placeholder="type your name here"
            name="name"
            type="text"
          />
        </div>

        <div className="center">
          <div className="selector">
            Profile Color:
            <select name="profile" value={profile} onChange={changeProfile}>
              {colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="selector">
            Header Color:
            <select name="header" value={header} onChange={changeHeader}>
              {colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
