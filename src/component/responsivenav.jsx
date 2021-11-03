import React from "react"
import "./style.css"
import HomeData from "../HomeData";
import Brands from "../data"
import {AiOutlineClose} from "react-icons/ai"


let Responsivenav=({comeIn})=>{
    
    return(
        <div>
            <div className="container-fluid resNav">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-end">
                        <button className="btn mt-3" onClick={comeIn}> 
                        <AiOutlineClose />
                        </button>
                    </div>
                    <div className="col-lg-12 mt-5 resnavCol     ">
                        <button className="btn  loginbtn"> Login</button>
                    </div>
                    <div className="col-lg-12 resNavitems">
                        <div className="resNavul pt-3 mt-3">
                        <div className="p-4 mt-3 liImg"  style={{backgroundImage: `url(${Brands[4].navImgs[0]})`}}>{HomeData[0].navItems[0]}</div>
                        <div className="p-4 mt-3 liImg" style={{backgroundImage: `url(${Brands[4].navImgs[1]})`}}>{HomeData[0].navItems[1]}</div>
                        <div className="p-4 mt-3 liImg" style={{backgroundImage: `url(${Brands[4].navImgs[2]})`}}>{HomeData[0].navItems[2]}</div>
                        <div className="p-4 mt-3 liImg" style={{backgroundImage: `url(${Brands[4].navImgs[3]})`}}>{HomeData[0].navItems[3]}</div>
                        <div className="p-4 mt-3 liImg" style={{backgroundImage: `url(${Brands[4].navImgs[4]})`}}>{HomeData[0].navItems[4]}</div>
                        <div className="p-4 mt-3 liImg" style={{backgroundImage: `url(${Brands[4].navImgs[5]})`}}>{HomeData[0].navItems[5]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Responsivenav
