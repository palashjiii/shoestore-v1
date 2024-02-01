
// import React, { useState } from 'react';
// import './App4.css';

// const Product = ({ id, name, price, addToCart }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (e) => {
//     setQuantity(parseInt(e.target.value));
//   };

//   const handleAddToCart = () => {
//     addToCart({ id, name, price, quantity });
//   };

//   return (
//     <div className="product">
//       <h3>{name}</h3>
//       <p>Price: ${price}</p>
//       <input type="number" value={quantity} onChange={handleQuantityChange} />
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// const Cart = ({ items }) => {
//   return (
//     <div className="cart">
//       <h2>Cart Summary</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App4= () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   return (
//     <div className="container">
//       <h1>Shopping Cart</h1>
//       <div className="product-container">
//         <h2>Products</h2>
//         <Product id={1} name="Product 1" price={10} addToCart={addToCart} />
//         <Product id={2} name="Product 2" price={20} addToCart={addToCart} />
//         {/* Add more products as needed */}
//       </div>
//       <div className="cart-container">
//         <Cart items={cartItems} />
//       </div>
//     </div>
//   );
// };

// export default App4;

///

// App.js
// import React, { useState } from 'react';
// import './App4.css';

// const Product = ({ id, name, price, image, addToCart }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (e) => {
//     setQuantity(parseInt(e.target.value));
//   };

//   const handleAddToCart = () => {
//     addToCart({ id, name, price, quantity });
//   };

//   return (
//     <div className="product">
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <p>Price: ${price}</p>
//       <input type="number" value={quantity} onChange={handleQuantityChange} />
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// const Cart = ({ items }) => {
//   return (
//     <div className="cart">
//       <h2>Cart Summary</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App4 = () => {
//   const [cartItems, setCartItems] = useState([0]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   return (
//     <div className="container">
//       <h1>Shopping Cart</h1>
//       <div className="product-container">
//         <h2>Products</h2>
//         <Product
//           id={1}
//           name="Product 1"
//           price={10}
//           image="1img.png"
//           addToCart={addToCart}
//         />
//         <Product
//           id={2}
//           name="Product 2"
//           price={20}
//           image="https://via.placeholder.com/150"
//           addToCart={addToCart}
//         />
//         {/* Add more products as needed */}
//       </div>
//       <div className="cart-container">
//         <Cart items={cartItems} />
//       </div>
//     </div>
//   );
// };

// export default App4;

///
// App.js
import React, { useState } from 'react';
import './App4.css';

const Product = ({ id, name, price, image, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity });
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

const Cart = ({ items }) => {
  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App4 = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="product-container">
        <h2>Products</h2>
        <Product
          id={1}
          name="Product 1"
          price={150}
          image="https://via.placeholder.com/150"
          addToCart={addToCart}
        />
        <Product
          id={2}
          name="Product 2"
          price={200}
          image="https://via.placeholder.com/150"
          addToCart={addToCart}
        />
        
      </div>
      <div className="cart-container">
        <Cart items={cartItems} />
      </div>
    </div>
  );
};

export default App4;


