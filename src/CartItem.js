import React from 'react';

class CartItem extends React.Component {
    constructor () {
        //this will call constuctor of parent class if inheritiing
        super()
        this.state = {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this', this.state);
        // setState form 1
        // this.setState({
        //   qty: this.state.qty + 1
        // });
    
        // setState form 2 - if prevState required use this
        this.setState((prevState) => {
          return {
            qty: prevState.qty + 1
          }
        });
      }
      decreaseQuantity = ()=>{

        this.setState((prevState) =>{
            if(prevState.qty === 0){
                return;
            }
            return {
                qty: prevState.qty - 1
            }
        })

      }
  render () {
    const {price , title ,qty} = this.state;
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
                onClick={this.increaseQuantity}/>
            <img alt="decrease" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                onClick={this.decreaseQuantity} />
            <img alt="delete" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" />
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