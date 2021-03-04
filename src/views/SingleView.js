import React from "react";
import ColorCard from "../components/cards/ColorCard";
import { Button, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { createSwatch, randomHex } from "../utils/colorCalculation";

class SingleColor extends React.Component {
  state = {
    color: "",
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
      await this.setState({ color: `#${color}` });
    } else {
      await this.setState({ color: randomHex() });
    }

    let swatch = createSwatch(this.state.color);
    this.setState({ swatch: swatch });
  }

  render() {
    if (this.state.swatch.length > 0) {
      return (
        <div className="single-color__container">
          <Button type="link" icon={<ArrowLeftOutlined />}>
            <Link to={"/list"}> Back to List</Link>
          </Button>

          <Row className="single-color__row" justify="space-around">
            <Col span={24}>
              <ColorCard color={this.state.color} isMini={false} />
            </Col>
          </Row>
          <Row className="single-color__row" justify="space-between">
            {this.state.swatch.map((color) => (
              <Col style={{ width: "18%" }} key={color}>
                <ColorCard color={color} isMini={true} />
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
