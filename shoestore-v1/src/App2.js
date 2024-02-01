import './App2.css'
import img from '../src/image/shoes.jpg.png'
import img1 from '../src/image/shoes2.jpg.png'


const App2 = () => {
    return (
        <>

            <div className="main-div">
                
                <div className="second-div">
                    <h1>My Orders</h1>
                    <p className='para'>View and edit all your pending.delivered,and
                        returnedn order here.</p>
                </div>
                <div className='hello'>
                <div className="third-div">
                    
                        <div className="mini">
                            <p className="para2">Order #R0374915036</p>
                        </div>
                        <div className="fourh-div">
                            <p className="para3">Order placed Thu 17th Jan 24</p>
                            </div>
                        
                        <button className="btn1">TRACK ORDER</button><br/>
                        
                       
                </div>
                <hr/>
                <div className='fifth-div'>
                <img className='photo' src={img}/>
                <div className='box-1'>
                    <h1>Mens Sport Shoes <br/>
                         Sport Fashion</h1>
                         <p className='qnt'>size:9 Qty:1   | Rs:1250</p>
                         
                </div>
                <div className='box-2'>
                    <p className="para4">Status</p>
                    <h3>In-Transit</h3>
                </div>
                <div className='box-3'>
                    <p className="para5">Delivery Expected By</p>
                    <h2>24 January 2024</h2>
                </div>

                </div>
                 <hr/>
                 <div className="sixth-div">
                <img className='photo1' src={img1}/>
                <div className='box-11'>
                    <h1>Abros Future ASSG1368<br/>
                         WHITE/SEA MIST<br/>
                         Mens Sports Shoes </h1>
                         <p className='qnt1'>size:10 Qty:1   | Rs:1870</p>
                         
                </div>
                <div className='box-12'>
                    <p className="para6">Status</p>
                    <h3>In-Transit</h3>
                </div>
                <div className='box-13'>
                    <p className="para7">Delivery Expected By</p>
                    <h2>26 January 2024</h2>
                </div>
                
                </div>
                <hr size="1" color="black"/>

                <div className="txt">
                    <h4>X CENCEL ORDER</h4>
                    <p className="graph">Paid using credit card ending with 7343</p>
                </div>
                 
                </div>
                
                
                


            </div>

        </>
    )
}

export default App2;