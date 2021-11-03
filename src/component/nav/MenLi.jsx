import React from 'react'
import NavData from "../../navdata";
import GrandSubTitleLi from './grandSubTitleLi'
import '../style.css'
 
function OtherSubMenLi() {
    return (
        <div>

            {/* <div className="menContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[1].liImages[0]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[1].liNames[0]}</h1>

                </div>

                <div className="grandSubulFootwear">
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[4]} textVal={NavData[0].navLiInfo[1].SubLiName1[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[5]} textVal={NavData[0].navLiInfo[1].SubLiName1[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[6]} textVal={NavData[0].navLiInfo[1].SubLiName1[2]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[7]} textVal={NavData[0].navLiInfo[1].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[8]} textVal={NavData[0].navLiInfo[1].SubLiName1[4]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[9]} textVal={NavData[0].navLiInfo[1].SubLiName1[5]}/>        

                </div>

                </div> */}

                <div className="menContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[1].liImages[1]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[1].liNames[1]}</h1>

                </div>

                <div className="grandSubulApparel">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[10]} textVal={NavData[0].navLiInfo[1].SubLiName2[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[11]} textVal={NavData[0].navLiInfo[1].SubLiName2[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[12]} textVal={NavData[0].navLiInfo[1].SubLiName2[2]}/>

                </div>

                </div>

                <div className="menContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[1].liImages[2]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[1].liNames[2]}</h1>

                </div>

                <div className="grandSubulAccessories">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[13]} textVal={NavData[0].navLiInfo[1].SubLiName3[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[14]} textVal={NavData[0].navLiInfo[1].SubLiName3[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[15]} textVal={NavData[0].navLiInfo[1].SubLiName3[2]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[16]} textVal={NavData[0].navLiInfo[1].SubLiName3[3]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[17]} textVal={NavData[0].navLiInfo[1].SubLiName3[4]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[18]} textVal={NavData[0].navLiInfo[1].SubLiName3[5]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[19]} textVal={NavData[0].navLiInfo[1].SubLiName3[5]}/>        

                </div>

                </div>

                <div className="menContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[1].liImages[3]})`}}></div>

                <div className="rightSide menRightSide">
 
                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[1].liNames[3]}</h1>

                </div>

                <div className="grandSubulBags">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[20]} textVal={NavData[0].navLiInfo[1].SubLiName4[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[21]} textVal={NavData[0].navLiInfo[1].SubLiName4[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[22]} textVal={NavData[0].navLiInfo[1].SubLiName4[2]}/>
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[1].liImages[23]} textVal={NavData[0].navLiInfo[1].SubLiName4[3]}/>

                </div>

            </div>

        </div>
    )
}

export default OtherSubMenLi
