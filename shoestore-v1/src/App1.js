import './App1.css'
import img from '../src/image/1img.png'


const App1=()=>{
    return(
        <>
           
            <div className="main-div">
                <div className="main-div-1">
                    
                <div className='green'>
                    <h1>Horray!Your order <br/>was confirmed</h1>
                </div>
                <div className='second'>
                    <p>Order ID:12458</p>

                    <span className='room'>We have sent your order confirmation<br/></span>
                    <span className='room'> and invoice to thisemail@gmail.com </span>
                </div>

                <button className='tpart-btn'>Continue Shooping</button>
                </div>

                <div className="main-div-2">
                <div className='tpart'>
                <img src={img}/>
            </div>
            <h1 className="tpart-h1">
                Your Order is confirmed!
            </h1>
            <p className='tpart-p'>
                We will send you a shipping confirmation 
                <br/>email as soon as your order ships
            </p>
            <button className='tpart-button'> Check status</button>

                </div>
            </div>



        </>
    )
}

export default App1;