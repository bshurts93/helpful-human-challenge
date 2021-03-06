import React from "react";
import ColorCard from "../components/cards/ColorCard";
import { Row, Col, Pagination } from "antd";
import { randomHex } from "../utils/colorCalculation";
import { firebase } from "../utils/firebase";
const db = firebase.database();

class ListView extends React.Component {
  state = {
    colorList: [],
    total: 0,
    pageItems: [],
    currentPage: 1,
  };

  componentDidMount = () => {
    const ref = db.ref("list");
    ref.on("value", async (snap) => {
      let colors = Object.values(snap.val());

      await this.setState({
        colorList: colors,
        total: colors.length,
        pageItems: colors.slice(0, 12),
      });
    });
  };

  generateColorList = async () => {
    let list = [];
    for (let i = 0; i < 144; i++) {
      list.push(randomHex());
    }
    await this.setState({
      colorList: list,
      total: list.length,
      pageItems: list.slice(0, 12),
    });
  };

  paginate = (page, pageSize) => {
    let start = (page - 1) * pageSize;
    let end = start + pageSize;
    let pageItems = this.state.colorList.slice(start, end);
    this.setState({ currentPage: page, pageItems: pageItems });
  };

  render() {
    if (this.state.colorList.length)
      return (
        <div className="list-color__container">
          <Row className="list-color__row" justify="space-between">
            {this.state.pageItems.map((color) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={4}
                style={{ padding: "20px" }}
                key={color}
              >
                <ColorCard color={color} isMini={true} linkEnabled={true} />
              </Col>
            ))}
          </Row>
          <Row justify="center">
            <Col>
              <Pagination
                defaultCurrent={1}
                pageSize={12}
                total={this.state.total}
                onChange={this.paginate}
              />
            </Col>
          </Row>
        </div>
      );
    else return "LOADING";
  }
}

export default ListView;
