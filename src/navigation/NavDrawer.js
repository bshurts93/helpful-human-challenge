import { Drawer, Menu } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { colorList } from "../constants/colors";

function NavDrawer(props) {
  const collapseDrawer = () => {
    props.collapseDrawer();
  };

  //   const colorItems = colorList.map((color) => color.title);
  let colorItems = Object.keys(colorList);

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
        {colorItems.map((color) => (
          <Menu.Item
            key={color}
            icon={<PieChartOutlined />}
            onClick={collapseDrawer}
          >
            <Link to={`/color/${color}`}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Drawer>
  );
}

export default NavDrawer;
