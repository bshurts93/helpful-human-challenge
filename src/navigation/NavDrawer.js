import { Drawer, Menu } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { colorList } from "../constants/colors";

function NavDrawer(props) {
  const collapseDrawer = () => {
    props.collapseDrawer();
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      closable
      onClose={props.collapseDrawer}
      visible={props.collapsed}
      bodyStyle={{ padding: 0 }}
    >
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        {colorList.map((color) => (
          <Menu.Item
            key={color}
            icon={<PieChartOutlined />}
            onClick={collapseDrawer}
          >
            <Link to={`/color/${color}`}>{color}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Drawer>
  );
}

export default NavDrawer;
