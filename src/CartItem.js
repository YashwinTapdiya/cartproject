import React from 'react';

class CartItem extends React.Component {
  render() {
    //console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} alt="" />
        </div>
        <div className="right-block">
          <div style={styles.title}>{title}</div>
          <div style={styles.price}>Price: {price}</div>
          <div style={styles.qty}>Quantity: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    color: '#777',
    marginBottom: 5,
  },
  qty: {
    color: '#777',
    marginBottom: 10,
  },
};

export default CartItem;
