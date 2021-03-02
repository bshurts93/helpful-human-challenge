import React from "react";
import { Card, Row, Col } from "antd";
import { getHexRange } from "../utils/colorCalculation";
import { colorList } from "../constants/colors";

class SingleColor extends React.Component {
  state = {
    color: "",
    swatch: [],
  };

  generateHSL() {
    const colorValues = colorList[this.state.color];

    return getHexRange(colorValues.hueValue, colorValues.satValue);
  }

  async componentDidMount() {
    let color = await this.props.match.params.color.toLowerCase();
    await this.setState({ color: color });

    const test = this.generateHSL();
    console.log(test);
    this.setState({ swatch: test });

    console.log(this.state);
  }

  render() {
    if (this.state.swatch.length > 0) {
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
                  style={{ background: `${this.state.swatch[2]}` }}
                />

                <div className="color-text">
                  {this.state.swatch[2].toUpperCase()}
                </div>
              </Card>
            </Col>
          </Row>
          <Row className="single-color__row" justify="space-between">
            {this.state.swatch.map((color) => (
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
