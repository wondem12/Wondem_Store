import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Model extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {(value)=>{
                    const {modelOpen, closeModel} = value;
                    const {img, title,price} = value.modelProduct;

                    if (!modelOpen) {
                       return null; 
                    }
                    else{
                        return(<div className="model">
                            <div className="container">
                                <div className="row">
                                    <div id="model1" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>item added to cart</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted"> price : $ {price}</h5>
                                        <Link to="/">
                                        <button className="btn btn-warning btnModel" onClick={()=>closeModel()}>
                                            Continue Shopping
                                        </button>
                                        </Link>
                                        <Link to="/cart">
                                        <button className="btn btn-warning btnModel" onClick={()=>closeModel()}>
                                            Go To Cart
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                }}

            </ProductConsumer>
         );
    }
}
 
export default Model;