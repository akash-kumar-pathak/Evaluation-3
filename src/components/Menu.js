import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

class MenuComponent extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
        <Menu.Item key="contact" icon={<ContactsOutlined />}>
          <NavLink to="/contact">Contact</NavLink>
        </Menu.Item>
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          style={{ float: "right" }}
          onClick={this.props.logout}
        >
          <span>Logout</span>
        </Menu.Item>
        <Menu.Item
          icon={<UserOutlined />}
          style={{ float: "right" }}
          onClick={null}
        >
          <span>Hello, {this.props.username}</span>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.username
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
