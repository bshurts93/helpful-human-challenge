import React from "react";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { randomHex } from "../utils/colorCalculation";

class ListView extends React.Component {
  state = {
    colorList: [],
  };

  componentDidMount() {
    this.generateColorList();
  }

  generateColorList() {
    let list = [];
    for (let i = 0; i < 12; i++) {
      list.push(randomHex());
    }
    this.setState({ colorList: list });
  }

  linkToSwatch(color) {
    this.props.history.push(`/color/${color.substring(1)}`);
  }

  render() {
    return (
      <div className="list-color__container">
        <Row className="list-color__row" justify="space-between">
          {this.state.colorList.map((color) => (
            <Col span={6} style={{ padding: "20px" }} key={color}>
              <div
                className="color-card color-mini__hue"
                style={{ background: `${color}` }}
                onClick={() => this.linkToSwatch(color)}
              />

              <div className="color-text">{color.toUpperCase()}</div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default ListView;
