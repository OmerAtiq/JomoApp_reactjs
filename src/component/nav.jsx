import React, { useState } from "react";
import { FiSearch, FiUser, FiX } from "react-icons/fi"
import { IoBagRemoveOutline, IoCallOutline } from "react-icons/io5"
import NavData from "../navdata";
import NewArrivalLi from "./nav/ArrivalLi.jsx"
import MenLi from "./nav/MenLi.jsx"
import WomenLi from "./nav/WomenLi.jsx"
import GirlsLi from "./nav/GirlsLi.jsx"
import BoysLi from "./nav/BoysLi.jsx"
import BrandsLi from "./nav/brandsLi";
import { Link } from "react-router-dom";
import "./style.css"

let Nav=({aceTrue,  FlyfootTrue, AddidasTrue, SapphireTrue, cartDivOut, closeDiv, addCart, newcartdata})=>{

    var newdata=JSON.parse(localStorage.getItem('data'))
    newdata=newdata? newdata : []

    let getData = newdata.map((show , i,arr)=>{
console.log(show,'show');
        return(
            <div>
                <h3>{show.itemname}</h3>
                <h3>{show.itemprice}</h3>
                 <img src={show.imgSlice} alt="img" /> 


            </div>
        )
    })
    // let [newdata, setnewdata]=useState()
    // function renderdata(){
        // setnewdata(JSON.parse(localStorage.getItem("data")))
        // console.log(newdata, "lc");
    // }
    
    
    return(
        <div>
            <div className="container-fluid prenav">
                <div className="row prenavRow">
                    <div className="col d-flex align-items-center justify-content-center">
                        <marquee direction="Left" width="85%" className="prenavMarquee"> {NavData[0].preNavContent}</marquee>
                    </div>
                </div>
                <div className="row navBarRow">
                    <div className="col-lg-2 col-md-2 col-7 ml-lg-0 ml-md-0 ml-5 d-flex justify-content-end align-items-center pr-0">
                        {/* <FiMenu className='menuIcon' onClick={navSliderOpen}/> */}
                        <Link to="/">
                        <img src={NavData[0].homeLogo} width='150px' height='45px' alt="" />
                        </Link>
                    </div>
                    <div className="col-8 d-lg-block d-md-block d-none">
                        <ul className='navUl'>
                            <li style={{ color: 'red' }}>{NavData[0].navItems[0]}</li>
                            <li className='newArrivalLi'>{NavData[0].navItems[1]}
                                <div className='newArrivalUl'>
                                    <NewArrivalLi />
                                </div>
                            </li>
                            <li className='menLiText' >{NavData[0].navItems[2]}
                                <div className="menUl">
                                    <MenLi />
                                </div>
                            </li>
                            <li className='womenLiText'>{NavData[0].navItems[3]}
                                <div className="womenUl">
                                    <WomenLi />
                                </div>
                            </li>
                            <li className='girlsLiText'>{NavData[0].navItems[4]}
                                <div className="girlsUl">
                                    <GirlsLi />
                                </div>
                            </li>
                            <li className='boysLiText'>{NavData[0].navItems[5]}
                                <div className="boysUl">
                                    <BoysLi />
                                </div>
                            </li>
                            <li className="BrandsLiText">{NavData[0].navItems[6]}
                                <div className="BrandsUl">
                                    <BrandsLi  aceTrue={aceTrue} FlyfootTrue={FlyfootTrue} AddidasTrue={AddidasTrue} SapphireTrue={SapphireTrue}/>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-2 col-4 iconContainer d-flex justify-content-lg-between justify-content-md-between justify-content-end align-items-center">

                        <FiSearch className='icons' />
                        <FiUser className='icons d-lg-block d-md-block d-none' />
                        <IoBagRemoveOutline className='icons' onClick={cartDivOut} />
                        <div className="cartcounter"><p>1</p></div>
                        <IoCallOutline className='icons d-lg-block d-md-block d-none'/>
                        <div className="cartDiv">
                            <div className="d-flex justify-content-end p-4 mt-3 ">
                                <div className="closeBtn d-flex align-content-center" onClick={closeDiv}> 
                            <FiX className ="closeIcon"/> <p className="ml-2" style={{fontSize : "1.4rem"}}>CLOSE</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="pl-5 cartheading">SHOPPING CART :</h4>
                                <hr className="mt-4" width="83%" style={{marginLeft: "9%"}} />
                            </div>

                            {getData}

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Nav