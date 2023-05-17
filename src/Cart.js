import React from 'react';
import CartItem from './CartItem';

 const Cart = (props) =>{

    const {products} = props;
    //const arr = [1,2,3,4,5];
    return (
      <div className="cart">
        {/* rendering a list
         {arr.map((item) =>{
            return item+5
        })}
        */} 
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteProduct={props.onDeleteProduct}
            />
          )
        })}
      </div>
    );
}

export default Cart;