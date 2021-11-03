import React from 'react'
import NavData from "../../navdata";
import GrandSubTitleLi from './grandSubTitleLi'
import '../style.css'

 
function OtherSubGirlsLi() {
    return (
        <div>

            <div className="girlsContentContainer">

                <div className="leftSide girlsLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[3].liImages[0]})`}}></div>

                <div className="rightSide girlsRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[3].liNames[0]}</h1>

                </div>

                <div className="grandSubulFootwear">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[4]} textVal={NavData[0].navLiInfo[3].SubLiName1[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[5]} textVal={NavData[0].navLiInfo[3].SubLiName1[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[6]} textVal={NavData[0].navLiInfo[3].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[7]} textVal={NavData[0].navLiInfo[3].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[8]} textVal={NavData[0].navLiInfo[3].SubLiName1[4]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[9]} textVal={NavData[0].navLiInfo[3].SubLiName1[5]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[10]} textVal={NavData[0].navLiInfo[3].SubLiName1[6]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[11]} textVal={NavData[0].navLiInfo[3].SubLiName1[7]}/>        

                </div>

                </div>

                <div className="girlsContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[3].liImages[1]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[3].liNames[1]}</h1>

                </div>

                <div className="grandSubulApparel">
        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[12]} textVal={NavData[0].navLiInfo[3].SubLiName2[0]}/>
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[13]} textVal={NavData[0].navLiInfo[3].SubLiName2[1]}/>

                </div>

                </div>

                <div className="girlsContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[3].liImages[2]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[3].liNames[2]}</h1>

                </div>

                <div className="grandSubulAccessories">
        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[14]} textVal={NavData[0].navLiInfo[3].SubLiName3[0]}/>        

                </div>

                </div>

                <div className="girlsContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[3].liImages[3]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[3].liNames[3]}</h1>

                </div>

                <div className="grandSubulBags">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[3].liImages[15]} textVal={NavData[0].navLiInfo[3].SubLiName4[0]}/>

                </div>

            </div>

        </div>
    )
}

export default OtherSubGirlsLi
