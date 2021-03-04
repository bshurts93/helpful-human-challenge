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
          <Row className="single-color__row" justify="space-around">
            <Col span={24}>
              <ColorCard
                color={this.state.color}
                isMini={false}
                linkEnabled={false}
              />
            </Col>
          </Row>
          <Row className="single-color__row" justify="space-between">
            {this.state.swatch.map((color) => (
              <Col
                xs={24}
                sm={24}
                md={4}
                lg={4}
                key={color}
                style={{ paddingBottom: "40px" }}
              >
                <ColorCard color={color} isMini={true} linkEnabled={false} />
              </Col>
            ))}
          </Row>
          <Button
            className="button-back"
            type="link"
            block
            icon={<ArrowLeftOutlined />}
          >
            <Link to={"/list"}> Back to List</Link>
          </Button>
        </div>
      );
    } else {
      return <h1>LOADING</h1>;
    }
  }
}

export default SingleColor;
