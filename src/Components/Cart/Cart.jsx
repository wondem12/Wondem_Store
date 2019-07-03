import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    return (
      <section>
        		  <div class="banner-top">
	<div class="container">
		<h3 >My Cart</h3>
		<h4><Link to="/">Home</Link><label>/</label>My Cart</h4>
		<div class="clearfix"> </div>
	</div>
</div>
<div class="container">
		<div  class="about">
	<div class="spec ">
				<h3>My Cart</h3>
					<div class="ser-t">
						<b></b>
						<span><i></i></span>
						<b class="line"></b>
					</div>
			</div>

		</div>
	</div>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartColumns />
                  <CartList value={value}/>
                  <CartTotal value={value}/>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
        <br/>
        <br/>
      </section>
    );
  }
}

export default Cart;
