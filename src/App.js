import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.css";

// Views
import SingleView from "./views/SingleView";
import ListView from "./views/ListView";

// App Navigation
import NavDrawer from "./components/navigation/NavDrawer";

// Ant Design Imports
import "antd/dist/antd.css";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Sider, Header, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: true,
  };

  toggleDrawer = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/helpful-human-challenge">
          <Layout className="site-layout">
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <NavDrawer collapsed={this.state.collapsed} />
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "menu-trigger",
                    onClick: this.toggleDrawer,
                  }
                )}
              </Header>
              <Content className="site-layout-background">
                <Switch>
                  <Route exact path="/list" component={ListView} />
                  <Route exact path="/">
                    <Redirect to="/color/random" />
                  </Route>
                  <Route path="/color/:color" component={SingleView} />
                </Switch>{" "}
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
