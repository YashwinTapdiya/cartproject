import React from 'react';
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VvjMUC1YJyaptsIAaCssIA1ZvUCODRZV-X7APuKLkV1i-9YgTBM2Z52WuT7ivjBxHCM&usqp=CAU',
          id: 1
        },
        {
          price: 999,
          title: 'TelePhone',
          qty: 10,
          img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Telefon_BW_2012-02-18_13-44-32.JPG',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.hindustantimes.com/tech/img/2021/09/14/1600x900/WhatsApp_Image_2021-09-14_at_5.13.31_PM_1631623490905_1631623503195.jpeg',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Please dec the qty of ' , product);
    const { products } =this.state;
    const index = products.indexOf(product);
    if(products[index].qty ===0 ){
        return;
    }
    
    products[index].qty -=1;

    this.setState({
        products
    })
  }

  handleDeleteProduct = (id)=>{
    const {products} =this.state;
    const items = products.filter((item)=>item.id !== id);
    this.setState({
        products: items
    } )
  }
  getCartCount = ()=> {
    const {products} =this.state;
    let count =0;
    products.forEach((product) => {
       count += product.qty;
    });

    return count;
  }
  getCartTotal = ()=>{
    const {products}= this.state;
    let cartTotal=0;
    products.forEach((product)=>{
      cartTotal+= product.price* product.qty;
    })
    return cartTotal;
  }

  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products ={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct} />
      <div style={styles.total}>
        TOTAL: {this.getCartTotal()}
      </div>
    </div>
  );
  }
}
const styles = {
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
};


export default App;