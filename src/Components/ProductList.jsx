import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { ProductConsumer } from "../context";
import ListGroup from './listGroup';
import Header from "./Header";
import SearchBox from "./searchBox";


class ProductList extends Component {
  state = {};
  render() {
    return (
      <div>
<Header/>
<div class="content-top">
        <div class="container ">
          <div class="spec">
            <h3>Products</h3>
            <div class="ser-t">
              <b />
              <span>
                <i />
              </span>
              <b class="line" />
            </div>
          </div>
          <div class="tab-head">
          
            <ProductConsumer>
                {value => {
                  return (
                    <ListGroup
                      items={value.categories}
                      selectedItem={value.selectedCategory}
                      onItemSelect={value.handleCategorySelect}
                    />
                  );
                }}
              </ProductConsumer>
              <div className="row">
              <ProductConsumer>
                {value => {
                  return (
                    <SearchBox
                      val={value.searchQuery}
                      onChange={value.handleSearch}
                    />
                  );
                }}
              </ProductConsumer>
              </div>
             
            <div class=" tab-content tab-content-t ">
              <div class="tab-pane active text-style" >
                <div class="row">
               
                
              <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <ProductItem key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          
                </div>
                <div class="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        
    );
  }
}

export default ProductList;
