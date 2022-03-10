import React from "react";
import "./button.css";
import { ArrowDownward } from "@material-ui/icons";
import {Info} from "@material-ui/icons";

function clickMe() {
  alert("You clicked me");
}

const Button = (props) => {
  return (
    <>
      <div className="Button_Types">
        <button className="AddButton" onClick={clickMe}>
          {props.name}
        </button>
      </div>
      <div className="Button_Types">
        <button className="MinusButton" onClick={clickMe}>
          Minus
        </button>
      </div>
      <div className="Button_Types">
        <button className="AddButton" disabled>
          Disable
        </button>
      </div>
      <div className="Button_Types">
        <a href="http://avinavstha.github.io/AviPortfolio">
          <button className="AddButton">Link</button>
        </a>
      </div>
      <div className="Button_Types">
        <button className="DownloadButton">
          <ArrowDownward
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          Download
        </button>
        <button className="DownloadButton">
          <ArrowDownward />
        </button>
      </div>
      <div className="Button_Types">
        <button className="informationButton">
        <Info />
        </button>
      </div>
      <div className="Button_Types">
        <button className="TransparentButton" onClick={clickMe}>
          transparent
        </button>
      </div>
      <div className="Button_Types">
        <button className="RoundedCornerButton" onClick={clickMe}>
          Rounded Corner Button
        </button>
      </div>
    </>
  );
};

export default Button;
