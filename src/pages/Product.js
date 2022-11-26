import { Button, Form, Radio, Rate } from "antd";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Product() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            <div>
              <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div>
              <img src="https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg" />
            </div>
          </Carousel>
        </div>
        <div className="col-md-6">
          <h4>Product Title New Design Available</h4>
          <Rate disabled defaultValue={4} />
          <div>
            {" "}
            <span className="fs-4">Rs.</span>{" "}
            <span className="fs-1 text-darkYellow">7.41</span>{" "}
          </div>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
         
          <Form>
            <Form.Item labal="Size">
              <Radio.Group className="rounded-3">
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="medium">Medium</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Button danger className="rounded-3 me-3">
              Add to Cart
            </Button>
            <Button danger className="rounded-3">
              Shop Now
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
