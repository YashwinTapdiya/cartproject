import React from "react";

const Navbar = (props)=>{
    return (
        <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
          <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="cart-icon" />
          <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    );
}

const styles = {
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0 20px',
      color: '#fff', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    },
    cartIconContainer: {
      position: 'relative',
    },
    cartIcon: {
      height: 32,
      marginRight: 20,
      cursor: 'pointer',
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9,
      fontSize: 12,
      fontWeight: 'bold', 
      color: '#000',
    },
  };
  

export default Navbar;