import { Button, Form, Radio, Rate } from "antd";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CustomProduct() {
  return (
    <div className="container py-5" id="customP">
      <div className="row ">
        <div className="col-md-6">
          <h4>Create Product of Your Own Choice</h4>

          <Form>
            <div id="customProduct">
              <div>
                <p class="lead mb-0">Choose Leather:</p>
                <label>
                  <input
                    type="radio"
                    name="leather"
                    class="card-input-element d-none"
                    id="demo1"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Leather 1
                  </span>
                </label>
                <label class="mt-3">
                  <input
                    type="radio"
                    name="leather"
                    class="card-input-element d-none"
                    id="demo2"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Leather 2
                  </span>
                </label>
              </div>
              <div>
                <p class="lead mb-0">Choose Color:</p>
                <label>
                  <input
                    type="radio"
                    name="color"
                    class="card-input-element d-none"
                    id="demo1"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Color 1
                  </span>
                </label>
                <label class="mt-3">
                  <input
                    type="radio"
                    name="color"
                    class="card-input-element d-none"
                    id="demo2"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Color 2
                  </span>
                </label>
              </div>
              <div>
                <p class="lead mb-0">Choose Sole:</p>
                <label>
                  <input
                    type="radio"
                    name="sole"
                    class="card-input-element d-none"
                    id="demo1"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Sole 1
                  </span>
                </label>
                <label class="mt-3">
                  <input
                    type="radio"
                    name="sole"
                    class="card-input-element d-none"
                    id="demo2"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Sole 2
                  </span>
                </label>
              </div>
              <div>
                <p class="lead mb-0">Choose Buckle:</p>
                <label>
                  <input
                    type="radio"
                    name="buckle"
                    class="card-input-element d-none"
                    id="demo1"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Buckle 1
                  </span>
                </label>
                <label class="mt-3">
                  <input
                    type="radio"
                    name="buckle"
                    class="card-input-element d-none"
                    id="demo2"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Buckle 2
                  </span>
                </label>
              </div>
              <div>
                <p class="lead mb-0">Choose Style:</p>
                <label>
                  <input
                    type="radio"
                    name="style"
                    class="card-input-element d-none"
                    id="demo1"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Style 1
                  </span>
                </label>
                <label class="mt-3">
                  <input
                    type="radio"
                    name="style"
                    class="card-input-element d-none"
                    id="demo2"
                  />
                  <span class="card card-body p-2 bg-light d-flex flex-row justify-content-between align-items-center">
                    Style 2
                  </span>
                </label>
              </div>
            </div>
            <p class="lead mb-0">Choose Size:</p>
            <Form.Item>
              <Radio.Group danger className="rounded-3">
                <Radio.Button danger value="large">
                  Large
                </Radio.Button>
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
        </div>{" "}
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
      </div>
    </div>
  );
}
