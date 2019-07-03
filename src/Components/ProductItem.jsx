import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class ProductItem extends Component {
  state = {};
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
        <ProductConsumer>
          {value =>(
            <div>
          <div className="img-container">

            <img src={img} className="card-img-top" alt="" />
          </div>
          
          <div className="mid-1">
            <div className="women">
              <h6>

                  {title}
              </h6>
            </div>
            </div>
            <div className="mid-2">
              <p>
                <h4 className="item_price">$ {price}</h4>
              </p>
              <div className="block">
                <div className="starbox small ghosting"> </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="add">
              <button
                className="btn btn-warning aab"
                disabled={inCart ? true : false}
                onClick={() => {
                  console.log(id);
                  value.addToCart(id);
                  value.openModel(id);
                }}
              >
                Add to Cart
              </button>
            </div>
            </div>
          )
          }
          
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default ProductItem;
