import React from "react";
import { useHistory } from "react-router-dom";

export default function ColorCard(props) {
  let history = useHistory();

  const linkToSwatch = (color) => {
    history.push(`/color/${color.substring(1)}`);
  };

  if (props.isMini) {
    return (
      <div>
        <div
          className="color-card color-mini__hue"
          style={{ background: `${props.color}` }}
          onClick={() => linkToSwatch(props.color)}
        />

        <div className="color-text">{props.color.toUpperCase()}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className="color-card color-main__hue"
          style={{ background: `${props.color}` }}
        />

        <div className="color-text">{props.color.toUpperCase()}</div>
      </div>
    );
  }
}
