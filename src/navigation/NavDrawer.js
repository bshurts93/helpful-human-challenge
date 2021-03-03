import { Drawer, Menu } from "antd";
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
        <Menu.Item onClick={collapseDrawer}>
          <Link to={"/list"}>List</Link>
        </Menu.Item>
        <Menu.Item onClick={collapseDrawer}>
          <Link to={"/color/random"}>Random</Link>
        </Menu.Item>
        {colorItems.map((color) => (
          <Menu.Item key={color} onClick={collapseDrawer}>
            <Link to={`/color/${colorList[color]}`}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Drawer>
  );
}

export default NavDrawer;
