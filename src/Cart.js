import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
          products: [
            {
              price: 99,
              title: 'Watch',
              qty: 1,
              img: '',
              id: 1
            },
            {
              price: 999,
              title: 'Mobile Phone',
              qty: 10,
              img: '',
              id: 2
            },
            {
              price: 999,
              title: 'Laptop',
              qty: 4,
              img: '',
              id: 3
            }
          ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        
      }
  render () {
    const {products} = this.state;
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
            />
          )
        })}
      </div>
    );
  }
}

export default Cart;