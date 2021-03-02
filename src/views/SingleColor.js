import React from "react";
import { Card, Row, Col } from "antd";
import { gradients } from "../constants/colors";

class SingleColor extends React.Component {
  state = {};

  render() {
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
                style={{ background: `${gradients.red[2]}` }}
              />

              <div className="color-text">{gradients.red[2].toUpperCase()}</div>
            </Card>
          </Col>
        </Row>
        <Row className="single-color__row" justify="space-between">
          {gradients.red.map((color) => (
            <Col style={{ width: "18%" }}>
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
  }
}

export default SingleColor;
