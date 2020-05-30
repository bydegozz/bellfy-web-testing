import React from "react";
import "../assets/css/TitleDescription.css";

function TitleDescription(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default TitleDescription;
