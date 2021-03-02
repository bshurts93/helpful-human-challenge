import React from "react";
import { Card, Row, Col } from "antd";
import { gradients } from "../constants/colors";
import { getHexRange } from "../utils/colorCalculation";
import { colorList } from "../constants/colors";

class SingleColor extends React.Component {
  state = {
    color: "",
    gradients: [],
  };

  generateHSL(hue) {
    const colorValues = colorList[this.state.color];

    getHexRange(colorValues.hueValue, colorValues.satValue);
  }

  async componentDidMount() {
    let color = this.props.match.params.color.toLowerCase();
    console.log(color);

    await this.setState({ color: color, gradients: gradients[color] });
    console.log(this.state);

    this.generateHSL(0);
  }

  render() {
    if (this.state.gradients.length > 0) {
      return (
        <div className="single-color__container">
          <Row className="single-color__row" justify="space-around">
            <Col span={24}>
              <Card
                bordered
                hoverable
                bodyStyle={{ padding: 0, borderRadius: 10 }}
              >
                <div
                  className="color-card color-main__hue"
                  style={{ background: `${this.state.gradients[2]}` }}
                />

                <div className="color-text">
                  {this.state.gradients[2].toUpperCase()}
                </div>
              </Card>
            </Col>
          </Row>
          <Row className="single-color__row" justify="space-between">
            {this.state.gradients.map((color) => (
              <Col style={{ width: "18%" }} key={color}>
                <Card bordered hoverable bodyStyle={{ padding: 0 }}>
                  <div
                    className="color-card color-mini__hue"
                    style={{ background: `${color}` }}
                  />

                  <div className="color-text">{color.toUpperCase()}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    } else {
      return <h1>LOADING</h1>;
    }
  }
}

export default SingleColor;
