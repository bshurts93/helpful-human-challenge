import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.css";

// Views
import SingleColor from "./views/SingleColor";

// App Navigation
import NavDrawer from "./navigation/NavDrawer";

// Ant Design Imports
import { Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: true,
    drawerOpen: false,
  };

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavDrawer
            collapseDrawer={this.toggleDrawer}
            collapsed={this.state.drawerOpen}
            onItemClick={this.toggleDrawer}
          />
          <Layout className="site-layout">
            <Header style={{ padding: 0 }}>
              <MenuOutlined
                onClick={this.toggleDrawer}
                style={{ paddingLeft: 20, color: "#fff" }}
              />
            </Header>
            <Content>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/color/random" />
                </Route>
                <Route path="/color/:color" component={SingleColor} />
              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
