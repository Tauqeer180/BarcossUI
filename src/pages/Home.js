import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Carousel as AntdCarousel, Card, Avatar, Button, Rate } from "antd";
import React from "react";
import Carousel from "react-multi-carousel";
import img1 from '../Images/Products/IMG_3798.JPG'
import img2 from '../Images/Products/IMG_3799.JPG'
import img4 from '../Images/Products/IMG_3802.JPG'
import img3 from '../Images/Products/IMG_3800.JPG'
import img5 from '../Images/Products/IMG_3803.JPG'
const { Meta } = Card;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const productsList=[
  {
  image: img1
},
  {
  image: img2
},
  {
  image: img3
},
  {
  image: img4
},
  {
  image: img5
},
 
]
export default function Home() {
  return (
    <div>
      <AntdCarousel autoPlay>
        <div>
          <div>
            <img
              width="100%"
              src="https://cdn.shopify.com/s/files/1/0318/4335/2712/files/Home-1-banner-1_8eda4d21-8929-496d-b7b0-3b21ee188c4b.jpg?v=1613737454"
            />
            <div className="carousel-content">
              <h3>Tie Dye Georgette</h3>
              <h3>Tie Dye Dress</h3>
              <p>Hot New Items</p>
              <h4>SALE 15% OFF</h4>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              width="100%"
              src="https://cdn.shopify.com/s/files/1/0318/4335/2712/files/Home-1-banner-1_8eda4d21-8929-496d-b7b0-3b21ee188c4b.jpg?v=1613737454"
            />
            <div className="carousel-content">
              <h3>Tie Dye Georgette</h3>
              <h3>Tie Dye Dress</h3>
              <p>Hot New Items</p>
              <h4>SALE 15% OFF</h4>
            </div>
          </div>
        </div>
      </AntdCarousel>

      <div className=" container-fluid mx-3 mt-3">
        <div className="row">
          <div className="col-md-2">
            <div className=" position-relative">
              <img
                width="100%"
                src="https://cdn.shopify.com/s/files/1/0318/4335/2712/files/318-x-417.jpg?v=1613736774"
              />
              <div className="sideBanner-content">
                <span>Fresh Food</span>
                <h5 className="fw-bold">Shoe Collection</h5>
                <a href="" class="btn px-4">
                  SHOP NOW
                </a>
              </div>
            </div>
            {/* Features Collection */}
            <div className="mt-4">
              <p className="fs-16 fw-bold mb-1">Features Collection</p>
              <hr className="my-2 text-darkYellow opacity-100" />
              {productsList.map((d) => {
              return  <div className="d-flex my-2">
                  <img
                    width="70px"
                    height="70px"
                    src={d.image}
                  />
                  <div className="ms-2">
                    <div className="fs-6">Shoes Title 1 Title</div>
                    <Rate className="fs-6" disabled defaultValue={4} />
                    <sapn className="fw-bold">$240.00 USD</sapn>
                  </div>
                </div>;
              })}
            </div>
          </div>
          <div className="col-md-10">
            <div className="mt-5">
              <h3 className="text-center">Popular Products</h3>
              <Carousel
                autoPlay={true}
                autoPlaySpeed={3000}
                arrows={false}
                infinite={true}
                responsive={responsive}
              >
                
                    <div className="d-flex">
                      <img
                        width="60px"
                        src={require('../Images/Products/IMG_3798.JPG')}
                      />
                      <div className="ms-2">
                        <div className="fw-bold">Shoes Title  1 Title</div>
                        <div>Shoes description</div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        width="60px"
                        src={require('../Images/Products/IMG_3799.JPG')}
                      />
                      <div className="ms-2">
                        <div className="fw-bold">Shoes Title  2 Title</div>
                        <div>Shoes description</div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        width="60px"
                        src={require('../Images/Products/IMG_3800.JPG')}
                      />
                      <div className="ms-2">
                        <div className="fw-bold">Shoes Title  3 Title</div>
                        <div>Shoes description</div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        width="60px"
                        src={require('../Images/Products/IMG_3802.JPG')}
                      />
                      <div className="ms-2">
                        <div className="fw-bold">Shoes Title  4 Title</div>
                        <div>Shoes description</div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        width="60px"
                        src={require('../Images/Products/IMG_3803.JPG')}
                      />
                      <div className="ms-2">
                        <div className="fw-bold">Shoes Title  5 Title</div>
                        <div>Shoes description</div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        width="60px"
                        src={require('../Images/Products/IMG_3798.JPG')}
                      />
                      <div className="ms-2">
                        <div className="fw-bold">Shoes Title  6 Title</div>
                        <div>Shoes description</div>
                      </div>
                    </div>
                
               
              </Carousel>
            </div>
            <div className="row">
              <h3 className="mt-5">Our Products</h3>
              {productsList.map((d) => {
                return (
                  <div className="col-md-3">
                    <Card
                      className="my-3"
                      cover={
                        <img
                          alt="example"
                          src={d.image}
                        />
                      }
                      actions={[
                        <Button icon={<ShoppingCartOutlined />}> 
                          Add To Cart
                        </Button>,
                      ]}
                    >
                      <Meta
                        title="Test Product title"
                        description="This is the description"
                      />
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
