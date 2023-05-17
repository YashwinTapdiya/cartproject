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
    this.db = firebase.firestore();
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
    // firebase
    //   .firestore()
    this.db
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

    //products[index].qty += 1;
    // this.setState({
    //   products
    // })
    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({ qty: products[index].qty + 1 })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch(error => {
        console.log(error);
      });

    
  }
  handleDecreaseQuantity = (product) => {
    console.log('Please dec the qty of ' , product);
    const { products } =this.state;
    const index = products.indexOf(product);
    if(products[index].qty ===0 ){
        return;
    }
    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({ qty: products[index].qty - 1 })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch(error => {
        console.log(error);
      });
    
    // products[index].qty -=1;

    // this.setState({
    //     products
    // })
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
  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "https://cdn1.smartprix.com/rx-i6gTE5YIQ-w1200-h1200/6gTE5YIQ.jpg",
        price: 900,
        qty: 3,
        title: "Washing Machine"
      })
      .then(docRef => {
        docRef.get().then(snapshot => {
          console.log("Product has been added", snapshot.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render(){
    const {products ,loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <button
  onClick={this.addProduct}
  style={{
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  }}
>
  Add a Product
</button>


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