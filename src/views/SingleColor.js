import React from "react";
import { Card, Row, Col } from "antd";

class SingleColor extends React.Component {
  state = {};

  render() {
    return (
      <div className="about-container">
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={false} style={{ width: 300 }}>
              <div className="color-card__mini">COLOR DISPLAY</div>
              <div>#hex</div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SingleColor;
