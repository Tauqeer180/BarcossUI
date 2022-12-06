import {
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderMain() {
  return (
    <div>
      <div className="justify-content-between d-flex bg-grey py-1 px-4">
        <div>INSTANT DISCOUNT CODE 50% OFF MM50</div>
        <div>
          {" "}
          <Link to="/about">
            <Button type="text">About</Button>{" "}
          </Link>
          <Link to="/contactus">
            <Button type="text">Contact Us</Button>{" "}
          </Link>
          <Button icon={<UserOutlined />} type="text">
            Account
          </Button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row p-3">
          <div className="col-sm-2">
            <img
              width={150}
              src={require("../Images/Logo/BarcossLogo.png")}
              className="img img-fluid"
            />
          </div>
          <div className="col-sm-7">
            <div className="input-group mb-3 w- mx-auto ">
              <input
                type="text"
                className="form-control py-2 "
                placeholder="Enter Your Email Address"
                aria-label="Enter Your Email Address"
                aria-describedby="button-addon2"
              />
              <button
                className="btn bg-darkYellow text-white fw-bold px-4"
                type="button"
                id="button-addon2"
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-sm-3">
            <span>
              <Button
                className="border-0 shadow-0"
                icon={<HeartOutlined className="fs-2 fw-light" />}
              >
                Wishlist
              </Button>
            </span>
            <span>
              <Link to="/cart">
                <Button
                  className="border-0 shadow-0"
                  icon={<ShoppingCartOutlined className="fs-2" />}
                >
                  USD
                </Button>
              </Link>
            </span>
          </div>
        </div>{" "}
      </div>{" "}
      {/* Nav Menu */}
      <div></div>
      <Menu className="px-3" mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.SubMenu
          className="bg-darkYellow text-white fw-bold"
          key="SubMenu0"
          title="Browse Category"
          icon={<DownOutlined />}
        >
          <Link to="/">
            <Menu.Item key="two1">Shoes</Menu.Item>
          </Link>
        </Menu.SubMenu>
        <Menu.Item key="SubMenu1" title="Home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="SubMenu2" title="Shop">
          <Link to="/">Shop</Link>
        </Menu.Item>
        <Menu.Item key="SubMen222u2">
          <Link to="/customproduct">Custom Product</Link>
        </Menu.Item>

        <Menu.Item key="SubMenu3" title="Contact US">
          <Link to="/contactus">Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="SubMenu4" title="About">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
