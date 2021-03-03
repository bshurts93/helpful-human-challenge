import React from "react";
import { Row, Col } from "antd";
import { createSwatch, randomHex } from "../utils/colorCalculation";
import { colorList } from "../constants/colors";

class SingleColor extends React.Component {
  state = {
    color: "",
    hex: "",
    swatch: [],
  };

  async componentWillReceiveProps(nextProps) {
    await nextProps;
    this.initColors();
  }

  componentDidMount() {
    this.initColors();
  }

  async initColors() {
    let color = await this.props.match.params.color.toLowerCase();

    if (color !== "random") {
      await this.setState({ color: color, hex: colorList[color].hex });
    } else {
      await this.setState({ color: color, hex: randomHex() });
    }

    let swatch = createSwatch(this.state.hex);
    this.setState({ swatch: swatch });
  }

  render() {
    if (this.state.swatch.length > 0) {
      return (
        <div className="single-color__container">
          <Row className="single-color__row" justify="space-around">
            <Col span={24}>
              <div
                className="color-card color-main__hue"
                style={{ background: `${this.state.swatch[2]}` }}
              />

              <div className="color-text">
                {this.state.swatch[2].toUpperCase()}
              </div>
            </Col>
          </Row>
          <Row className="single-color__row" justify="space-between">
            {this.state.swatch.map((color) => (
              <Col style={{ width: "18%" }} key={color}>
                <div
                  className="color-card color-mini__hue"
                  style={{ background: `${color}` }}
                />

                <div className="color-text">{color.toUpperCase()}</div>
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
