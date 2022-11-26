import React from "react";

export default function Cart() {
  return (
    <div>
      <div className="container">
        <div className="mt-5" >
            <h2 className="text-center" >Cart</h2>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-10 offset-md-1 mt-5">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Total</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-sm-8 col-md-6">
                    <div className="media">
                      <a className="thumbnail pull-left" href="#">
                        {" "}
                        <img
                          width="72px"
                          height="72px"
                          className="media-object me-2"
                          src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"
                          //   style="width: 72px; height: 72px;"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="#">Product name</a>
                        </h4>
                        <h6 className="media-heading">
                          {" "}
                         Product description
                        </h6>
                        <span>Status: </span>
                        <span className="text-success">
                          <strong>In Stock</strong>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td
                    className="col-sm-1 col-md-1"
                    //   style="text-align: center"
                  >
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      value="3"
                    />
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>$4.87</strong>
                  </td>
                  <td className="col-sm-1 col-md-1 text-center">
                    <strong>$14.61</strong>
                  </td>
                  <td className="col-sm-1 col-md-1">
                    <button type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove"></span>{" "}
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-6">
                    <div className="media">
                      <a className="thumbnail pull-left" href="#">
                        {" "}
                        <img
                          width="72px"
                          height="72px"
                          className="media-object me-2"
                          src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"
                          //   style="width: 72px; height: 72px;"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="#">Product name</a>
                        </h4>
                        <h6 className="media-heading">
                          {" "}
                           Product Description
                        </h6>
                        <span>Status: </span>
                        <span className="text-warning">
                          <strong>Leaves warehouse in 2 - 3 weeks</strong>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td
                    className="col-md-1"
                    //   style="text-align: center"
                  >
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      value="2"
                    />
                  </td>
                  <td className="col-md-1 text-center">
                    <strong>$4.99</strong>
                  </td>
                  <td className="col-md-1 text-center">
                    <strong>$9.98</strong>
                  </td>
                  <td className="col-md-1">
                    <button type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove"></span>{" "}
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>$24.59</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h5>Estimated shipping</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>$6.94</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <h3>Total</h3>
                  </td>
                  <td className="text-right">
                    <h3>
                      <strong>$31.53</strong>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>   </td>
                  <td>   </td>
                  <td>   </td>
                  <td>
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                      Continue Shopping
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-success">
                      Checkout{" "}
                      <span className="glyphicon glyphicon-play"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
