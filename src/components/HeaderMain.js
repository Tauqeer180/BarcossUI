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
              src="https://cdn.shopify.com/s/files/1/0318/4335/2712/files/logo_e2abf572-4917-4190-8e9c-bed56adfbc3f.png?v=1613731623"
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
          <Menu.Item key="two">Shoes</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="SubMenu1" title="Home">
          <Link to="/">
            <Menu.Item key="two">Home</Menu.Item>
          </Link>
          <Link to="/Shop">
            <Menu.Item key="three">Shop</Menu.Item>
          </Link>
          <Menu.ItemGroup title="Item Group">
            <Menu.Item key="four">Navigation Four</Menu.Item>
            <Menu.Item key="five">Navigation Five</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.SubMenu key="SubMenu2" title="Shop">
          <Link to="/">
            <Menu.Item key="two">Home</Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item key="three">Shop</Menu.Item>
          </Link>
        </Menu.SubMenu>
        <Link to="/contactus">
          <Menu.SubMenu key="SubMenu3" title="Contact US"></Menu.SubMenu>
        </Link>
        <Link to="/about">
          <Menu.SubMenu key="SubMenu4" title="About" ></Menu.SubMenu>
        </Link>
      </Menu>
    </div>
  );
}
