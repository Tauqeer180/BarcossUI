import { HomeOutlined, MobileOutlined } from "@ant-design/icons";
import React from "react";
export default function Footer() {
  return (
    <div className="container-fluid footer-bg">
      <div className="row p-4 ">
        <div className="col">
          <img src="https://cdn.shopify.com/s/files/1/0318/4335/2712/files/logo_e2abf572-4917-4190-8e9c-bed56adfbc3f.png?v=1613731623" />
          <p className="mt-4">
            Tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
            erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
            facilisis luctus, metus.
          </p>
          <p className="fw-bold fs-5">Location</p>
          <p>
            {" "}
            <span>
              <HomeOutlined />
            </span>{" "}
            7882 Longbranch Rd Reliance GIDC
          </p>
          <p>
            {" "}
            <span>
              <MobileOutlined />
            </span>{" "}
            +014-33333-8888-6868
          </p>
        </div>
        <div className="col">
          <p className="fs-5 fw-bold">Top Categories</p>
          <ul>
            <li>Cloth</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Shoes</li>
            <li>Watch</li>
            <li>Jewellry</li>
          </ul>
        </div>
        <div className="col">
          <p className="fs-5 fw-bold">Services</p>
          <ul>
            <li>Cloth</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Shoes</li>
            <li>Watch</li>
            <li>Jewellry</li>
          </ul>
        </div>
        <div className="col">
          <p className="fs-5 fw-bold">Privacy & Terms</p>
          <ul>
            <li>Cloth</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Shoes</li>
            <li>Watch</li>
            <li>Jewellry</li>
          </ul>
        </div>
        <div className="col">
          <p className="fs-5 fw-bold">My Account</p>
          <ul>
            <li>Cloth</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Shoes</li>
            <li>Watch</li>
            <li>Jewellry</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
