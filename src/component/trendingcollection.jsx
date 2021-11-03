import React from 'react'
import "./style.css"
let Trendingcollection = ({ Mainimg1, Name, Sub_name, Price, Color1, setimg, addCart }) => {
    
    return (
        <div>
            <div class="card slidercard" style={{ width: "22rem", border: "none" }}>
                <img class="card-img-top slidercard_height " height="100%" width='100%' src={Mainimg1} alt="" />
                <button className="btn cartbtn" onClick={addCart}>Add To Cart</button>
                <div class="card-body carousel_cont bd">
                    <h3 class="card-title  ml-0 mt-2">{Name}</h3>
                    <h4 class="card-text mt-2">{Sub_name}</h4>
                    <h4 class="card-text cardprice mt-3">PKR. {Price}</h4>

                    <div>
                    {Color1.map((ele,i) => {
                           return(
               <button className="btn bg-white ml-3 a" onClick={setimg}>  <img class="" height="50vh" width='50vw'  src={ele} alt="" /> </button>
                               
                           )
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Trendingcollection