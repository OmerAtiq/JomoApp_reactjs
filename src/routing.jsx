import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Brands from "./data"
import $ from "jquery"
import Nav from './component/nav'
import Datarendering from './component/datarendering'
import Mainpage from "./component/mainpage"
import Footer from './component/footer'

let Rout = () => {

    let [womenCollection, setwomenCollection] = useState(true)
    let [menCollection, setmenCollection] = useState(false)
    let [kidsCollection, setkidsCollection] = useState(false)
    let [discountsCollection, setdiscountsCollection] = useState(false)


    let [isWomanActive, setIsWomanActive]=useState(true)
    let [ismenActive, setIsmenActive]=useState(false)
    let [iskidsActive, setIskidsActive]=useState(false)
    let [discountsActive, setIsdiscountsActive]=useState(false)


    function women() {
        setwomenCollection(true)
        setIsWomanActive(true)
        setIskidsActive(false)
        setIsmenActive(false)
        setmenCollection(false)
        setkidsCollection(false)
        setdiscountsCollection(false)
        setIsdiscountsActive(false)
    }
    function men() {
        setwomenCollection(false)
        setmenCollection(true)
        setIsmenActive(true)
        setIskidsActive(false)
        setIsWomanActive(false)
        setkidsCollection(false)
        setdiscountsCollection(false)
        setIsdiscountsActive(false)
    }
    function kids() {
        setkidsCollection(true)
        setIskidsActive(true)
        setIsmenActive(false)
        setIsWomanActive(false)
        setwomenCollection(false)
        setmenCollection(false)
        setdiscountsCollection(false)
        setIsdiscountsActive(false)
    }
    function discounts() {
        setIsWomanActive(false)
        setdiscountsCollection(true)
        setIsdiscountsActive(true)
        setIskidsActive(false)
        setIsmenActive(false)
        setkidsCollection(false)
        setwomenCollection(false)
        setmenCollection(false)
    }

    let [Trendingfootwear, setTrendingfootwear] = useState(true)
    let [Trendingappreal, setTrendingappreal] = useState(false)
    let [Trendingbags, setTrendingbags] = useState(false)
    let [Trendingaccessories, setTrendingaccessories] = useState(false)

    let [isTrendingActive, setIsTrendingActive]=useState(true)
    let [isapprealActive, setIsapprealActive]=useState(false)
    let [isbagsActive, setIsbagsActive]=useState(false)
    let [accessoriesActive, setIsaccessoriesActive]=useState(false)

    function footwear() {
        setTrendingfootwear(true)
        setIsTrendingActive(true)
        setIsaccessoriesActive(false)
        setIsbagsActive(false)
        setTrendingappreal(false)
        setIsapprealActive(false)
        setTrendingbags(false)
        setTrendingaccessories(false)
    }
    function appreal() {
        setTrendingappreal(true)
        setIsapprealActive(true)
        setIsaccessoriesActive(false)
        setIsTrendingActive(false)
        setIsbagsActive(false)
        setTrendingfootwear(false)
        setTrendingbags(false)
        setTrendingaccessories(false)
    }
    function bags() {
        setTrendingbags(true)
        setIsbagsActive(true)
        setIsaccessoriesActive(false)
        setIsapprealActive(false)
        setIsTrendingActive(false)
        setTrendingfootwear(false)
        setTrendingappreal(false)
        setTrendingaccessories(false)
    }
    function accessories() {
        setTrendingaccessories(true)
        setIsaccessoriesActive(true)
        setIsbagsActive(false)
        setIsapprealActive(false)
        setIsTrendingActive(false)
        setTrendingfootwear(false)
        setTrendingappreal(false)
        setTrendingbags(false)
    }
    let [Ace, setAce]=useState(false)
    function aceTrue(){
        setAce(true)
        setFlyfoot(false)
        setAddidas(false)
        setSapphire(false)

    }
    let [Flyfoot, setFlyfoot]=useState(false)
    function FlyfootTrue(){
        setFlyfoot(true)
        setAce(false)
        setAddidas(false)
        setSapphire(false)
    }
    let [Addidas, setAddidas]=useState(false)
    function AddidasTrue(){
        setAddidas(true)
        setAce(false)
        setFlyfoot(false)
        setSapphire(false)


    }
    let [Sapphire, setSapphire]=useState(false)
    function SapphireTrue(){
        setSapphire(true)
        setAddidas(false)
        setAce(false)
        setFlyfoot(false)
    }


    let comeOut=()=>{
        $('.resNav').css({
            left : '0%'
        })
    }
    let comeIn=()=>{
        $('.resNav').css({
            left : '-100%'
        })
    }
    let cartDivOut=()=>{
        $('.cartDiv').css({
            right : '0%'
        })
    }
    let closeDiv=()=>{
        $('.cartDiv').css({
            right : '-150%'
        })
    }

    let [Branddata, setBranddata]=useState([Brands[0]])
    let [BranddataFlyfoot, setBranddataFlyfoot]=useState([Brands[1]])
    let [BranddataAddidas, setBranddataAddidas]=useState([Brands[5]])
    let [BranddataSapphire, setBranddataSapphire]=useState([Brands[6]])

    function addCart(e){
        var parent = e.target.parentElement
        storeinlocalstorage(parent)
    }
    function storeinlocalstorage(parent) {
        // let arr = Brands[0].Men[0].footWear[0].footWearChappalCollection[0].Images[0]
        // console.log(arr,'imgFile');
        var itemimg = parent.querySelector("img").src
        console.log(itemimg);

        var imgSlice = itemimg.slice(22,itemimg.length)

        console.log(imgSlice,'imgSlice');

        var itemname = parent.querySelector('.card-title').innerText
        var itemprice =parent.querySelector ('.cardprice').innerText
        var obj = { imgSlice, itemname, itemprice }
        var data = JSON.parse(localStorage.getItem("data"))

        if (!data) {
            localStorage.setItem("data", JSON.stringify([obj]))
        }
        else {
            data.push(obj)
            localStorage.setItem("data", JSON.stringify(data))
        }
            // renderdata()
    }
    // let [newdata, setnewdata]=useState([])
    // function renderdata(){
    //     setnewdata(JSON.parse(localStorage.getItem("data")))
    //     console.log(newdata);
    // }

    // console.log(Branddata);
   
    return (
        <>  
            <Nav   aceTrue={aceTrue} FlyfootTrue={FlyfootTrue} AddidasTrue={AddidasTrue} SapphireTrue={SapphireTrue} cartDivOut={cartDivOut} closeDiv={closeDiv}/>
            <Route exact path="/">
            <Mainpage  addCart={addCart} comeIn={comeIn} comeOut={comeOut} isTrendingActive={isTrendingActive} isapprealActive={isapprealActive} isbagsActive={isbagsActive} accessoriesActive={accessoriesActive} isWomanActive={isWomanActive} iskidsActive={iskidsActive} discountsActive={discountsActive} ismenActive={ismenActive}  footwear={footwear} appreal={appreal} bags={bags} accessories={accessories} Trendingfootwear={Trendingfootwear} Trendingappreal={Trendingappreal} Trendingbags={Trendingbags} Trendingaccessories={Trendingaccessories} women={women} men={men} kids={kids} discounts={discounts} womenCollection={womenCollection} menCollection={menCollection} kidsCollection={kidsCollection} discountsCollection={discountsCollection}  />
            </Route>
            <Route path ="/Datarendering">
            <Datarendering addCart={addCart} Branddata={Branddata} BranddataFlyfoot={BranddataFlyfoot} BranddataAddidas={BranddataAddidas} BranddataSapphire={BranddataSapphire} Ace={Ace}  Flyfoot={Flyfoot}  Addidas={Addidas} Sapphire={Sapphire}/>
            </Route>

            <Footer />

        </>
    )
}
export default Rout
