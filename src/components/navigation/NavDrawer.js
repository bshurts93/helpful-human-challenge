import { Image, Menu } from "antd";
import { Link } from "react-router-dom";
import { colorList } from "../../constants/colors";
import { QuestionCircleOutlined, SmileOutlined } from "@ant-design/icons";
import HHLogo from "../../assets/images/hh-logo.svg";

function NavDrawer(props) {
  let colorItems = Object.keys(colorList);
  let isCollapsed = props.collapsed;

  return (
    <div>
      <div className="logo">
        {isCollapsed && <Image src={HHLogo} preview={false} />}
        {!isCollapsed && <p className="logo-text">HELPFUL HUMAN</p>}
      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ height: "100%" }}
      >
        <Menu.Item icon={<QuestionCircleOutlined />}>
          <Link to={"/color/random"}>Random</Link>
        </Menu.Item>
        {colorItems.map((color) => (
          <Menu.Item
            key={color}
            icon={<SmileOutlined style={{ color: `#${colorList[color]}` }} />}
          >
            <Link to={`/color/${colorList[color]}`}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default NavDrawer;
