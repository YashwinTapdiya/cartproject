import React from 'react';

class CartItem extends React.Component {
  render () {
    console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    const {product , onIncreaseQuantity , onDecreaseQuantity , onDeleteProduct } = this.props;
    return (
        //jsx
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt=""/>
        </div>
        <div className="right-block">      
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>{price}</div>
          <div style={ { color: '#777' } }>{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                onClick={() => onIncreaseQuantity(product)}/>
            <img alt="decrease" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                onClick={() => onDecreaseQuantity(product)} />
            <img alt="delete" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
                onClick={()=> onDeleteProduct(product.id)} />
          </div>
        </div>
      </div>
    );
  }
}
//styling elements using objets
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;