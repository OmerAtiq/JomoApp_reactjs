import React from "react";
// import Brands from "../data"
import "./style.css"
let BrandsCard=({Name, Sub_name, Price, imgs, climg, setimg, addCart})=>{

    return(
        <div class="card ml-5 brandcard" style={{ width: "22rem", border: "none" }}>
                <img class="card-img-top slidercard_height" height="100%" width='100%' src={imgs} alt="" />
                <button className="btn cartbtn brandcartbtn" onClick={addCart}>Add To Cart</button>
                <div class="card-body">
                    <h3 class="card-title  ml-0 mt-2">{Name}</h3>
                    <h4 class="card-text mt-2">{Sub_name}</h4>
                    <h4 class="card-text cardprice mt-3">PKR. {Price}</h4>
                    <div>
                    {climg.map((ele,i) => {
                           return(
               <button className="btn bg-white ml-3 border" onClick={setimg}>  <img class="" height="50vh" width='50vw'  src={ele} alt="" /> </button>
                               
                           )
                        })}
                    </div>
                </div>
            </div>
    )
}
export default BrandsCard