import './App3.css';

import img from '../src/image/first.jpg.png';
import img1 from '../src/image/second.jpg.png';
import React, { useState } from 'react';



const App3 = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    if(counter2<0){
        setCounter2(0);
    }
    if(counter1<0){
        setCounter1(0);
    }


    
    
    
    return (
        <>
            <div className="main-div">
                <div className='second-main-div'>

                    <div className='first-div'>
                        <h1>GET FREE SHIPPING WITH NIKE+ON ORDER EVERY TIME</h1>
                        <p className='fd'>Non memers recove free shoping for purchases $150 or more .see</p>
                    </div>
                    <div className='second-div'>
                        <h2>Your Cart(2)</h2>
                    </div>
                    <div className='third-div'>
                        <img className='photo' src={img} />
                        <div className='new'>
                            <div className='hii'>
                                <h1 className='width2'>NIKE AIR MAX DO ID MERIS SHARE</h1>
                                <p className='content'>
                                    <h4>Style:  </h4>
                                    <h4>Size:</h4>
                                    <h4>Odr:</h4>
                                    <h4> Desingn id:</h4>
                                    <button className='btn1'>REMOVE</button>
                                </p>
                            </div>
                            <div>
                                <p className='content1'>
                                    <h4>34634668 </h4>
                                    <h4>usMIND11.5</h4>
                                    <h4>1Qs31256</h4>
                                    <h4>30986534368</h4>
                                    <button className='btn2' onClick={() => setCounter1(counter1 + 1)}>+</button>
                                    
                                    <span>Quantity: {counter1}</span>
                                    <button className='btn2' onClick={() => setCounter1(counter1 - 1)}>-</button>
                                </p>
                            </div>
                            

                        </div>
                        <h1 className='head'>
                        $ {100.0 * counter1}
                            </h1>
                    </div>

                    <div className='fouth-div'>
                        <img className='photo2' src={img1} />
                        <div className='new2'>
                        <div>
                                <h1 className='width'>NIKE AIR LIGHT DO IT MEERI</h1>
                                <p className='content2'>
                                    <h4>Style:  </h4>
                                    <h4>Size:</h4>
                                    <h4>Odr:</h4>
                                    <h4> Desingn id:</h4>
                                    <button className='btn4'>REMOVE</button>
                                </p>
                            </div>
                            <div>
                            <p className='content3'>
                                    <h4>34634668 </h4>
                                    <h4>usMIND11.5</h4>
                                    <h4>1Qs31256</h4>
                                    <h4>30986534368</h4>
                                    <button className='btn5' onClick={() => setCounter2(counter2 + 1)}>+</button>
                                    <span>Quantity: {counter2}</span>
                                    <button className='btn5' onClick={() => setCounter2(counter2 - 1)}>-</button>
                                </p>
                            </div>

                        </div>
                        <h1 className='head1'>
                                  $ {100.0 * counter2}
                            </h1>

    


                    </div>
                    </div>
                    

                    <div className='db'>
        <div className='SUMMARY'>
          <h1>SUMMARY</h1>
          <p className='SAMMI'>DO YOU HAVE A PROMO CODE</p>
          <div className='subtotal'>
            <h2>SUBTOTAL</h2>
            <h2 className='left'>$334.0</h2>
          </div>
          <div className='cb'>
            <p className='pragraph'>
              ESTIMATED SHIPPING & HANDLING STANDARD FREE arrives 20 days
            </p>
            <h2 className='left1'>$124.0</h2>
          </div>
          <div className='divtax'>
            <p className='tax'>TAX</p>
            <h2 className='left2'>$_ _</h2>
          </div>
          <div className='total'>
            <h2>TOTAL</h2>
            <h2 className='left3'>$458.0</h2>
          </div>
        </div>

      <button className='hello'>CHECKOUT</button>
      </div>

                    



                
            </div>

        </>
    )
}

export default App3;

// import React, { useState } from 'react';
// import './App3.css';
// import img from '../src/image/first.jpg.png';
// import img1 from '../src/image/second.jpg.png';

// const App3 = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'NIKE AIR MAX DO ID MERIS SHARE',
//       image: img,
//       style: '34634668',
//       size: 'usMIND11.5',
//       order: '1Qs31256',
//       designId: '30986534368',
//       price: 100.0,
//       quantity: 0,
//     },
//     {
//       id: 2,
//       name: 'NIKE AIR LIGHT DO IT MEERI',
//       image: img1,
//       style: '34634668',
//       size: 'usMIND11.5',
//       order: '1Qs31256',
//       designId: '30986534368',
//       price: 100.0,
//       quantity: 0,
//     },
//   ]);

//   const handleQuantityChange = (id, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <>
//       <div className="main-div">
//         <div className='second-main-div'>

//           <div className='first-div'>
//             <h1>GET FREE SHIPPING WITH NIKE+ON ORDER EVERY TIME</h1>
//             <p className='fd'>Non members receive free shipping for purchases $150 or more. See</p>
//           </div>
          
//           <div className='second-div'>
//             <h2>Your Cart({cartItems.length})</h2>
//           </div>

//           {cartItems.map(item => (
//             <div className='third-div' key={item.id}>
//               <img className='photo' src={item.image} alt={item.name} />
//               <div className='new'>
//                 <div className='hii'>
//                   <h1 className='width2'>{item.name}</h1>
//                   <p className='content'>
//                     <h4>Style: {item.style}</h4>
//                     <h4>Size: {item.size}</h4>
//                     <h4>Odr: {item.order}</h4>
//                     <h4>Design id: {item.designId}</h4>
//                     <button className='btn1'>REMOVE</button>
//                   </p>
//                 </div>
//                 <div>
//                   <p className='content1'>
//                     <h4>{item.style}</h4>
//                     <h4>{item.size}</h4>
//                     <h4>{item.order}</h4>
//                     <h4>{item.designId}</h4>
//                     <button className='btn2' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//                     <span>Quantity: {item.quantity}</span>
//                     <button className='btn2' onClick={() => handleQuantityChange(item.id, Math.max(0, item.quantity - 1))}>-</button>
//                   </p>
//                 </div>
//               </div>
//               <h1 className='head'>$ {100.0 * item.quantity}</h1>
//             </div>
//           ))}

//           {/* ... other JSX for the remaining divs */}
          
//         </div>

//         <div className="db">
//           <div className="SUMMARY">
//             <h1>SUMMARY</h1>
//             <p className="SAMMI">DO YOU HAVE A PROMO CODE</p>
//             <div className="subtotal">
//               <h2>SUBTOTAL</h2>
//               <h2 className="left">${product1.price * counter1 + product2.price * counter2}</h2>
//             </div>
//             <div className="cb">
//               <p className="pragraph">ESTIMATED SHIPPING & HANDLING STANDARD FREE arrives 20 days</p>
//               <h2 className="left1">$124.0</h2>
//             </div>
//             <div className="divtax">
//               <p className="tax">TAX</p>
//               <h2 className="left2">$_ _</h2>
//             </div>
//             <div className="total">
//               <h2>TOTAL</h2>
//               <h2 className="left3">${product1.price * counter1 + product2.price * counter2 + 124.0}</h2>
//             </div>
//           </div>

//           <button className="hello">CHECKOUT</button>
//         </div>
//       </div>
//     </>
//   );
// };
   

// export default App3;
