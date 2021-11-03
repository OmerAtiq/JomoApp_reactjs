import React, { useState } from "react";
import HomeData from "../HomeData";
import Brands from "../data";
// import { FiSearch, FiUser, FiX } from "react-icons/fi"
// import { IoBagRemoveOutline, IoCallOutline } from "react-icons/io5"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiMenu } from "react-icons/fi"
import OwlCarousel from "react-owl-carousel";
import '../OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css'
import '../OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css'
import Trendingcollection from "./trendingcollection";
import { Parallax } from 'react-parallax'
// import Responsivenav from "./responsivenav";
import "./style.css"
// import { Link } from "react-router-dom";

let Mainpage = ({addCart, women, men, kids, discounts, womenCollection, menCollection, kidsCollection, discountsCollection, footwear, appreal, bags, accessories, Trendingfootwear, Trendingbags, Trendingappreal, Trendingaccessories, isWomanActive, discountsActive, ismenActive, iskidsActive, isTrendingActive, isapprealActive, isbagsActive, accessoriesActive }) => {

    // console.log(Brands[0].Women[0].footWear[0].footWearSportsCollection[0].Images[0]);
    function setimg(e) {

        var grandp = e.target.parentElement.parentElement.parentElement.parentElement
        var parent = e.target.parentElement
        let bigimg = grandp.querySelector("img")
        let smalimg = parent.querySelector("img")
        bigimg.src = smalimg.src
        // console.log(smalimg, bigimg);
    }
    


    return (
        <>
        <div>
            <div id="carouselExampleIndicators" class="carousel slide slider" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={HomeData[0].sliderImgs[0]} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            {HomeData[0].slider1Btns.map((ele, i) => {
                                return (
                                    <button key={i} className="btn m-2 sliderBtns">{ele}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={HomeData[0].sliderImgs[1]} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            {HomeData[0].slider2Btns.map((ele, i) => {
                                return (
                                    <button key={i} className="btn m-2 sliderBtns">{ele}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={HomeData[0].sliderImgs[2]} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            {HomeData[0].slider3Btns.map((ele, i) => {
                                return (
                                    <button key={i} className="btn m-2 sliderBtns">{ele}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={HomeData[0].sliderImgs[3]} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            {HomeData[0].slider4Btns.map((ele, i) => {
                                return (
                                    <button key={i} className="btn m-2 sliderBtns">{ele}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={HomeData[0].sliderImgs[4]} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            {HomeData[0].slider5Btns.map((ele, i) => {
                                return (
                                    <button key={i} className="btn m-2 sliderBtns">{ele}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={HomeData[0].sliderImgs[5]} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            {HomeData[0].slider6Btns.map((ele, i) => {
                                return (
                                    <button key={i} className="btn m-2 sliderBtns">{ele}</button>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="" aria-hidden="true"> <BsChevronLeft className="ic mt-2" /> </span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="" aria-hidden="true"> <BsChevronRight className="ic mt-2" /></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className="container-fluid mt-4 p-0 m-0">
                <div className="row p-0 m-0">
                    <div className="col-lg-6 col-md-12  p-0 m-0 flow mb-1">
                        <img className="img-fluid img1" src={HomeData[1].activeWear_apparel[0]} alt="" />

                    </div>
                    <div className="col-lg-6 col-md-12  p-0 m-0 flow mb-1">
                        <img className="img-fluid img1" src={HomeData[1].activeWear_apparel[1]} alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="row collectionRow">
                    <div className="col-lg-6 col-md-12 collectionHeading ">
                        <h1 className="m-2">{HomeData[2].mainCollection[0].collectionHeading}</h1>
                    </div>
                    <div className="col-lg-6 col-md-12 collectionsItems ">
                        <button className={`btn m-2 collectionsBtn ${isWomanActive ? 'collectionsBtnclick' : ''}`} onClick={women} > {HomeData[2].mainCollection[0].collectionItems[0]}</button>
                        <button className={`btn m-2 collectionsBtn ${ismenActive ? 'collectionsBtnclick' : ''}`} onClick={men}> {HomeData[2].mainCollection[0].collectionItems[1]}</button>
                        <button className={`btn m-2 collectionsBtn ${iskidsActive ? 'collectionsBtnclick' : ''}`} onClick={kids}> {HomeData[2].mainCollection[0].collectionItems[2]}</button>
                        <button className={`btn m-2 collectionsBtn ${discountsActive ? 'collectionsBtnclick' : ''}`} onClick={discounts}> {HomeData[2].mainCollection[0].collectionItems[3]}</button>

                    </div>
                </div>
                {womenCollection === true && <div className="row imgRow mt-5">
                    <div className="col  women1">
                        <h1 className="mcH1">Hello</h1>
                        <img height="98%" width="100%" className="img1" src={HomeData[2].mainCollection[1].women[0]} alt="" />
                    </div>
                    <div className="col women2">
                        <img height="100%" width="107%" className="women2img img1" src={HomeData[2].mainCollection[1].women[1]} alt="" />
                    </div>
                    <div className="col women3">
                        <img height="100%" width="107%" className="women3img img1" src={HomeData[2].mainCollection[1].women[2]} alt="" />

                    </div>
                    <div className="col women4">
                        <img height="100%" width="107%" className="women3img img1" src={HomeData[2].mainCollection[1].women[3]} alt="" />

                    </div>
                </div>}

                {menCollection === true && <div className="row imgRow mt-5">
                    <div className="col women1">
                        <img height="98%" width="106.5%" className="women2img img1" src={HomeData[2].mainCollection[1].Men[0]} alt="" />
                    </div>
                    <div className="col women2">
                        <img height="100%" width="107%" className="women2img img1" src={HomeData[2].mainCollection[1].Men[1]} alt="" />
                    </div>
                    <div className="col women3">
                        <img height="100%" width="107%" className="women3img img1" src={HomeData[2].mainCollection[1].Men[2]} alt="" />

                    </div>
                    <div className="col women4">
                        <img height="100%" width="107%" className="women3img img1" src={HomeData[2].mainCollection[1].Men[3]} alt="" />

                    </div>
                </div>}

                {kidsCollection === true && <div className="row imgRow mt-5">
                    <div className="col women1">
                        <img height="98%" width="106.5%" className="women2img img1" src={HomeData[2].mainCollection[1].Kids[0]} alt="" />
                    </div>
                    <div className="col women2">
                        <img height="100%" width="107%" className="women2img img1" src={HomeData[2].mainCollection[1].Kids[1]} alt="" />
                    </div>
                    <div className="col women3">
                        <img height="100%" width="107%" className="women3img img1" src={HomeData[2].mainCollection[1].Kids[2]} alt="" />

                    </div>
                    <div className="col women4">
                        <img height="100%" width="107%" className="women3img img1" src={HomeData[2].mainCollection[1].Kids[3]} alt="" />

                    </div>
                </div>}

                {discountsCollection === true && <div className="row imgRow mt-5">
                    <div className="col women1">
                        <img height="98%" width="106.5%" className="women2img img1" src={HomeData[2].mainCollection[1].Discounts[0]} alt="" />
                    </div>
                    <div className="col women2">
                        <img height="100%" width="107%" className="women2img img1" src={HomeData[2].mainCollection[1].Discounts[1]} alt="" />
                    </div>
                    <div className="col women3">
                        <img height="100%" width="107%" className="women3img img1" src={HomeData[2].mainCollection[1].Discounts[2]} alt="" />

                    </div>
                    <div className="col women4">
                        <img height="100%" width="107%" className="women3img img1" src={HomeData[2].mainCollection[1].Discounts[3]} alt="" />

                    </div>
                </div>}

            </div>
            <div className="saleimg mt-2">
                <Parallax bgImage={HomeData[3].sale} strength={-100} bgClassName='imageSize' >
                    <div className="parallaximg"></div>
                </Parallax>
            </div>

            <div className="container-fluid carousel_cont">
                <div className="row collectionRow pt-5">
                    <div className="col-lg-6 col-md-12 collectionHeading">
                        <h1 className="m-2">{HomeData[4].trendingProducts[0].trendingHeading}</h1>
                    </div>
                    <div className="col-lg-6 col-md-12 pr-4  collectionsItems ">
                        <button className={`btn m-2 collectionsBtn TrendingBtn ${isTrendingActive ? 'collectionsBtnclick' : ''} `} onClick={footwear}  > {HomeData[4].trendingProducts[0].trendingItems[0]}</button>
                        <button className={`btn m-2 collectionsBtn TrendingBtn ${isapprealActive ? 'collectionsBtnclick' : ''} `} onClick={appreal}> {HomeData[4].trendingProducts[0].trendingItems[1]}</button>
                        <button className={`btn m-2 collectionsBtn TrendingBtn ${isbagsActive ? 'collectionsBtnclick' : ''} `} onClick={bags}> {HomeData[4].trendingProducts[0].trendingItems[2]}</button>
                        <button className={`btn m-2 collectionsBtn TrendingBtn ${accessoriesActive ? 'collectionsBtnclick' : ''} `} onClick={accessories}> {HomeData[4].trendingProducts[0].trendingItems[3]}</button>

                    </div>
                </div>
                {Trendingfootwear === true && <div className="row carouselrow pt-5 mt-5 pb-5">
                    <OwlCarousel className='owl-theme'
                        items="5"
                        autoplay={false}
                        nav
                        // navText= {<BsChevronLeft/>, <BsChevronRight/>}	
                        margin={0}
                        loop={false}
                    responsive={
                        {
                            0:{
                                items: 2
                            },
                            
                            1200:{
                                items: 5
                            },
                            1400:{
                                items :5
                            },

                        }
                    }
                    >
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[5].Men[0].footWear[2].footWearSportCollection[0].Name} Sub_name={Brands[5].Men[0].footWear[2].footWearSportCollection[0].SubName} Price={Brands[5].Men[0].footWear[2].footWearSportCollection[0].Price} Mainimg1={Brands[5].Men[0].footWear[2].footWearSportCollection[0].Images[0]} Color1={Brands[5].Men[0].footWear[2].footWearSportCollection[0].colorImg} />
                        </div>
                        <div className="col">
                        <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[1].Men[0].footWear[0].footWearChappalCollection[2].Name} Sub_name={Brands[1].Men[0].footWear[0].footWearChappalCollection[2].SubName} Price={Brands[1].Men[0].footWear[0].footWearChappalCollection[2].Price} Mainimg1={Brands[1].Men[0].footWear[0].footWearChappalCollection[2].Images[0]} Color1={Brands[1].Men[0].footWear[0].footWearChappalCollection[2].colorImg} />
                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].Name} Sub_name={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].SubName} Mainimg1={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].Images[0]} Color1={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].colorImg} />
                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Name} Sub_name={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].SubName} Price={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Price} Mainimg1={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Images[0]} Color1={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].colorImg} />

                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Name} Sub_name={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].SubName} Price={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Price} Mainimg1={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Images[0]} Color1={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].colorImg} />
                        </div>
                        <div className="col">
                        <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Name} Sub_name={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].SubName} Price={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Price} Mainimg1={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Images[0]} Color1={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].colorImg} />
                        </div>

                    </OwlCarousel>
                </div>}

                {Trendingappreal === true && <div className="row carouselrow pt-5 mt-5 pb-5">
                    <OwlCarousel className='owl-theme'
                        items="5"
                        autoplay={false}
                        nav={true}
                        // navText= {<BsChevronLeft/>, <BsChevronRight/>}	
                        margin={0}
                        loop={true}
                        responsive={
                            {
                                0:{
                                    items: 3
                                },
                                
                                1200:{
                                    items: 5
                                },

    
                            }
                        }
                    >

                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].Name} Sub_name={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].SubName} Price={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].Price} Mainimg1={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].Images[0]} Color1={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].colorImg} />
                        </div>
                        <div className="col">
                        <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].Name} Sub_name={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].SubName} Price={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].Price} Mainimg1={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].Images[0]} Color1={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].colorImg} />
                        </div>
                        <div className="col">
                        <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[1].Name} Sub_name={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[1].SubName} Price={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[1].Price} Mainimg1={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[1].Images[0]} Color1={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[1].colorImg} />
                        </div>
                        <div className="col">
                        <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].Name} Sub_name={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].SubName} Price={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].Price} Mainimg1={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].Images[0]} Color1={Brands[5].Men[0].Apparel[1].apparelTrousersCollection[0].colorImg} />
                        </div>
                        <div className="col">
                        <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[2].Name} Sub_name={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[2].SubName} Price={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[2].Price} Mainimg1={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[2].Images[0]} Color1={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[2].colorImg} />
                        </div>
                        <div className="col">
                        <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].Name} Sub_name={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].SubName} Price={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].Price} Mainimg1={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].Images[0]} Color1={Brands[5].Men[0].Apparel[0].apparelTshirtCollection[0].colorImg} />
                        </div>

                    </OwlCarousel>
                </div>}

                {Trendingbags === true && <div className="row carouselrow pt-5 mt-5 pb-5">
                    <OwlCarousel className='owl-theme'
                        items="3"
                        autoplay={false}
                        nav={true}
                        // navText= {<BsChevronLeft/>, <BsChevronRight/>}	
                        margin={0}
                        loop={true}
                        responsive={
                            {
                                0:{
                                    items: 3
                                },
                                
                                1200:{
                                    items: 5
                                },

    
                            }
                        }
                    >

                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].Name} Sub_name={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].SubName} Price={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].Price} Mainimg1={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].Images[1]} Color1={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].colorImg} />
                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Name} Sub_name={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].SubName} Price={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Price} Mainimg1={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Images[0]} Color1={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].colorImg} />
                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].Name} Sub_name={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].SubName} Mainimg1={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].Images[0]} Color1={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].colorImg} />
                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Name} Sub_name={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].SubName} Price={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Price} Mainimg1={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Images[1]} Color1={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].colorImg} />

                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Name} Sub_name={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].SubName} Price={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Price} Mainimg1={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Images[1]} Color1={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].colorImg} />
                        </div>
                        {/* <div className="col">
                        </div> */}

                    </OwlCarousel>
                </div>}

                {Trendingaccessories === true && <div className="row carouselrow pt-5 mt-5 pb-5">
                    <OwlCarousel className='owl-theme'
                        items="5"
                        autoplay={false}
                        nav={true}
                        // navText= {<BsChevronLeft/>, <BsChevronRight/>}	
                        margin={0}
                        loop={true}
                        responsive={
                            {
                                0:{
                                    items: 3
                                },
                                
                                1200:{
                                    items: 5
                                },
                                1400:{
                                    items :5
                                },
    
                            }
                        }
                    >

                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].Name} Sub_name={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].SubName} Price={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].Price} Mainimg1={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].Images[1]} Color1={Brands[0].Men[0].footWear[0].footWearChappalCollection[0].colorImg} />
                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Name} Sub_name={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].SubName} Price={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Price} Mainimg1={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].Images[0]} Color1={Brands[0].Men[0].footWear[1].footWearSandleCollection[0].colorImg} />
                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].Name} Sub_name={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].SubName} Mainimg1={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].Images[0]} Color1={Brands[0].Women[0].footWear[0].footWearSportsCollection[0].colorImg} />
                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Name} Sub_name={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].SubName} Price={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Price} Mainimg1={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].Images[1]} Color1={Brands[1].Men[0].footWear[0].footWearChappalCollection[1].colorImg} />

                        </div>
                        <div className="col">
                            <Trendingcollection addCart={addCart} setimg={setimg} Name={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Name} Sub_name={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].SubName} Price={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Price} Mainimg1={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].Images[1]} Color1={Brands[1].Men[0].footWear[0].footWearChappalCollection[0].colorImg} />
                        </div>
                        {/* <div className="col">
                        </div> */}

                    </OwlCarousel>
                </div>}
            </div>
            <div className="container-fluid">
                <div className="row collectionRow mt-5 pt-5">
                    <div className="col-lg-6 ">
                        <h1 className="m-2">{HomeData[5].featureProducts[0].featureHeading}</h1>
                    </div>
                </div>
            </div>
            <div className="row carouselrow pt-5 pb-5">
                <OwlCarousel className='owl-theme'
                    items="6"
                    autoplay={true}
                    nav={false}
                    // navText= {<BsChevronLeft/>, <BsChevronRight/>}	
                    margin={0}
                    loop={true}
                    cennter={true}
                    responsive = {
                        {0:{
                            items:1
                        },
                        400:{
                            items:2
                        },
                        600:{
                            items: 3
                        },
                        768:{
                            items:3
                        },
                        1024:{
                            items:6
                        },              
                        1500:{
                            items: 5
                        },
                        1600:{
                            items: 7
                        }}
                    }
                >

                    <div className="col">
                        <img src={Brands[2].Allimg[0]} alt="" />
                    </div>
                    <div className="col">
                        <img src={Brands[2].Allimg[1]} alt="" />
                    </div>
                    <div className="col">
                        <img src={Brands[2].Allimg[2]} alt="" />
                    </div>
                    <div className="col">
                        <img src={Brands[2].Allimg[3]} alt="" />
                    </div>
                    <div className="col">
                        <img src={Brands[2].Allimg[4]} alt="" />
                    </div>
                    <div className="col">
                        <img src={Brands[2].Allimg[5]} alt="" />
                    </div>

                </OwlCarousel>
            </div>

            <div className="container-flui mb-5 pb-5">
                <div className="row instaRow mt-5 pt-5">
                    <div className="col-lg-1 col-md-5  instaCol">
                        <p className="instaPara">
                            FOLLOW US ON <br /> INSTAGRAM
                        </p>
                        <p className="jomo">#jomo.pk</p>
                    </div>
                    <div className="col-lg-2 col-md-5 d-flex justify-content-center ml-1 mt-2"><img src={Brands[3].instaCard[0]} alt="" /></div>
                    <div className="col-lg-2 col-md-5 d-flex justify-content-center ml-1 mt-2"><img src={Brands[3].instaCard[1]} alt="" /></div>
                    <div className="col-lg-2 col-md-5 d-flex justify-content-center ml-1 mt-2"><img src={Brands[3].instaCard[2]} alt="" /></div>
                    <div className="col-lg-2 col-md-5 d-flex justify-content-center ml-1 mt-2"><img src={Brands[3].instaCard[3]} alt="" /></div>
                    <div className="col-lg-2 col-md-5 d-flex justify-content-center ml-1 mt-2"><img src={Brands[3].instaCard[0]} alt="" /></div>
                </div>
            </div>

 

        </div>
    </>
    )
}
export default Mainpage