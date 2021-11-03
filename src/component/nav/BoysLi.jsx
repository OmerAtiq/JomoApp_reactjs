import React from 'react'
import NavData from "../../navdata";
import GrandSubTitleLi from './grandSubTitleLi'
import '../style.css'
 

function OtherSubBoysLi() {
    return (
        <div>

            <div className="boysContentContainer">

                <div className="leftSide boysLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[4].liImages[0]})`}}></div>

                <div className="rightSide boysRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[4].liNames[0]}</h1>

                </div>

                <div className="grandSubulFootwear">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[4]} textVal={NavData[0].navLiInfo[4].SubLiName1[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[5]} textVal={NavData[0].navLiInfo[4].SubLiName1[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[6]} textVal={NavData[0].navLiInfo[4].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[7]} textVal={NavData[0].navLiInfo[4].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[8]} textVal={NavData[0].navLiInfo[4].SubLiName1[4]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[9]} textVal={NavData[0].navLiInfo[4].SubLiName1[5]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[10]} textVal={NavData[0].navLiInfo[4].SubLiName1[6]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[11]} textVal={NavData[0].navLiInfo[4].SubLiName1[7]}/>        

                </div>

                </div>

                <div className="boysContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[4].liImages[1]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[4].liNames[1]}</h1>

                </div>

                <div className="grandSubulApparel">
        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[12]} textVal={NavData[0].navLiInfo[4].SubLiName2[0]}/>
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[13]} textVal={NavData[0].navLiInfo[4].SubLiName2[1]}/>

                </div>

                </div>

                <div className="boysContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[4].liImages[2]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[4].liNames[2]}</h1>

                </div>

                <div className="grandSubulAccessories">
        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[14]} textVal={NavData[0].navLiInfo[4].SubLiName3[0]}/>        

                </div>

                </div>

                <div className="boysContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[4].liImages[3]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[4].liNames[3]}</h1>

                </div>

                <div className="grandSubulBags">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[4].liImages[15]} textVal={NavData[0].navLiInfo[4].SubLiName4[0]}/>

                </div>

            </div>

        </div>
    )
}

export default OtherSubBoysLi
