import React from 'react'
import NavData from '../../navdata'
import GrandSubTitleLi from './grandSubTitleLi'
import '../style.css'

 
function OtherSubWomenLi() {
    return (
        <div>

            <div className="womenContentContainer">

                <div className="leftSide womenLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[2].liImages[0]})`}}></div>

                <div className="rightSide womenRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[2].liNames[0]}</h1>

                </div>

                <div className="grandSubulFootwear">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[4]} textVal={NavData[0].navLiInfo[2].SubLiName1[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[5]} textVal={NavData[0].navLiInfo[2].SubLiName1[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[6]} textVal={NavData[0].navLiInfo[2].SubLiName1[2]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[7]} textVal={NavData[0].navLiInfo[2].SubLiName1[3]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[8]} textVal={NavData[0].navLiInfo[2].SubLiName1[4]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[9]} textVal={NavData[0].navLiInfo[2].SubLiName1[5]}/>        

                </div>

                </div>

                <div className="womenContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[2].liImages[1]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[2].liNames[1]}</h1>

                </div>

                <div className="grandSubulApparel">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[10]} textVal={NavData[0].navLiInfo[2].SubLiName2[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[11]} textVal={NavData[0].navLiInfo[2].SubLiName2[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[12]} textVal={NavData[0].navLiInfo[2].SubLiName2[2]}/>

                </div>

                </div>

                <div className="womenContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[2].liImages[2]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[2].liNames[2]}</h1>

                </div>

                <div className="grandSubulAccessories">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[13]} textVal={NavData[0].navLiInfo[2].SubLiName3[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[14]} textVal={NavData[0].navLiInfo[2].SubLiName3[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[15]} textVal={NavData[0].navLiInfo[2].SubLiName3[2]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[16]} textVal={NavData[0].navLiInfo[2].SubLiName3[3]}/>        

                </div>

                </div>

                <div className="womenContentContainer">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${NavData[0].navLiInfo[2].liImages[3]})`}}></div>

                <div className="rightSide menRightSide">

                    <h1 className='liH1 defaultFontWeight'>{NavData[0].navLiInfo[2].liNames[3]}</h1>

                </div>

                <div className="grandSubulBags">

                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[17]} textVal={NavData[0].navLiInfo[2].SubLiName4[0]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[18]} textVal={NavData[0].navLiInfo[2].SubLiName4[1]}/>        
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[19]} textVal={NavData[0].navLiInfo[2].SubLiName4[2]}/>
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[20]} textVal={NavData[0].navLiInfo[2].SubLiName4[3]}/>
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[21]} textVal={NavData[0].navLiInfo[2].SubLiName4[4]}/>
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[22]} textVal={NavData[0].navLiInfo[2].SubLiName4[5]}/>
                    <GrandSubTitleLi imgVal={NavData[0].navLiInfo[2].liImages[23]} textVal={NavData[0].navLiInfo[2].SubLiName4[6]}/>

                </div>

            </div>

        </div>
    )
}

export default OtherSubWomenLi
