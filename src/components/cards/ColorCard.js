import React from "react";
import { useHistory } from "react-router-dom";
import copy from "copy-to-clipboard";

export default function ColorCard(props) {
  let history = useHistory();

  const clickHandler = (color) => {
    if (props.linkEnabled) {
      history.push(`/color/${color.substring(1)}`);
    } else {
      console.log(color);

      copy(color);
    }
  };

  if (props.isMini) {
    return (
      <div className="color-card">
        <div
          className="color-mini__hue"
          style={{ background: `${props.color}` }}
          onClick={() => clickHandler(props.color)}
        />

        <div className="color-text">{props.color.toUpperCase()}</div>
      </div>
    );
  } else {
    return (
      <div className="color-card">
        <div
          className="color-main__hue"
          style={{ background: `${props.color}` }}
          onClick={() => clickHandler(props.color)}
        />

        <div className="color-text">{props.color.toUpperCase()}</div>
      </div>
    );
  }
}
