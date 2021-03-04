import React from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";

import copy from "copy-to-clipboard";

export default function ColorCard(props) {
  let history = useHistory();

  const clickHandler = (color) => {
    if (props.linkEnabled) {
      history.push(`/color/${color.substring(1)}`);
    } else {
      console.log(color);

      copy(color);
      message.success({
        content: `Color copied to clipboard: ${color.toUpperCase()}`,
        duration: 2,
        icon: <CheckCircleOutlined style={{ color: color }} />,
      });
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
