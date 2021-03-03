import React from "react";
import { Row, Col } from "antd";
import { getHexRange } from "../utils/colorCalculation";
import { colorList } from "../constants/colors";

class SingleColor extends React.Component {
  state = {
    color: "",
    swatch: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      swatch: [],
    };
  }

  async componentWillReceiveProps(nextProps) {
    await nextProps;
    this.initColors();
  }

  componentDidMount() {
    this.initColors();
  }

  async initColors() {
    let color = await this.props.match.params.color.toLowerCase();
    await this.setState({ color: color });
    const swatch = this.generateHSL();
    this.setState({ swatch: swatch });
  }

  generateHSL() {
    let colorValues;
    if (colorList[this.state.color]) {
      colorValues = colorList[this.state.color];
    } else {
      colorValues = {
        title: "RANDOM",
        hueValue: Math.floor(Math.random() * 360),
        satValue: Math.floor(Math.random() * 50) + 50,
      };
    }
    return getHexRange(colorValues.hueValue, colorValues.satValue);
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
