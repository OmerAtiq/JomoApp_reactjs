import React from "react";
import FooterData from "./footerdata"
let Footer = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row footerRow1">
                    <div className="col-lg-4  footerHeading col-md-12 p-5">
                        <p className="footerHeading1">{FooterData[0].footerHeading[0]}</p>
                        <h3 className="footerHeading2">{FooterData[0].footerHeading[1]}</h3>
                        <p className="footerHeading1">{FooterData[0].footerHeading[2]}</p>
                    </div>
                    <div className="col-lg-4 footerPara col-sm-12 d-flex justify-content-center flex-column">
                        <p className="">{FooterData[0].footerPara}</p>
                    </div>
                    <div className="col-lg-4 col-md-12   d-flex justify-content-center flex-column">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control p-4 footerInp " placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div class ="input-group-append">
                            <span class ="input-group-text btn sub pl-5 pr-5" id="basic-addon2">SUBSCRIBE</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row bg-light pt-5 pb-4 pl-4">
                    {/* <ul className="ul3 d-flex justify-content-between pb-0 pl-5">
                        <li className="pb-0 li3 ml-4">{FooterData[0].footerLiList[0]}</li>
                        <li className="pb-0 li3 ml-4">{FooterData[0].footerLiList[1]}</li>
                        <li className="pb-0 li3 ml-4">{FooterData[0].footerLiList[2]}</li>
                        <li className="pb-0 li3 ml-4">{FooterData[0].footerLiList[3]}</li>
                        <li className="pb-0 li3 ml-4">{FooterData[0].footerLiList[4]}</li>
                        <li className="pb-0 li3 ml-4">{FooterData[0].footerLiList[5]}</li>
                        <li className="pb-0 li3 ml-4">{FooterData[0].footerLiList[6]}</li>

                    </ul> */}
                </div>
                <div className="row footerEnd bg-dark p-3">
                    <h5 className="pl-5 ml-4">{FooterData[0].footerEnd}</h5>
                </div>
            </div>
        </div>
    )
}
export default Footer