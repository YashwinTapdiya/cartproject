import React from 'react';
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  // componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then(snapshot => {
  //      console.log(snapshot);
  //      snapshot.docs.map((doc) =>{
  //       return console.log(doc.data);
  //      })

  //      const products = snapshot.docs.map((doc)=>{
  //       const data =doc.data();
  //       data['id'] =doc.id;
  //       return data;
  //      })
  //      this.setState({
  //       products:products,
  //       loading: false
  //      })
  //     });
  // }
  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
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
    const {products ,loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products ={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct} 
      />
      {loading && <h1>Loading Products...</h1>}
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