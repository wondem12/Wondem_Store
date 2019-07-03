import React from 'react';
import { Link } from "react-router-dom";
const CartTotal = ({value}) => {
  const {cartSubTotal,clearCart,checkCart}=value;
    return ( 
        <React.Fragment>
            <div className="continer">
                <div className="row">
               <div className="col-4">
               <Link to="/">
                        <button className="btn btn-warning btnModel"  onClick={()=>clearCart()}>
                        Clear Cart
                        </button>
                    </Link>
                    </div>
                    <div className="col-4">
                    <h5><span >Subtotal :</span><strong>$ {cartSubTotal}</strong></h5>
                    </div>
                    <div className="col-4">
                    <button  className="btn btn-warning btnModel"  onClick={()=>checkCart({cartSubTotal})}>Check Out </button>
               </div>
                   
         
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default CartTotal;