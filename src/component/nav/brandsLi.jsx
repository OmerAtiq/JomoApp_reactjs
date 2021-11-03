import React from "react"
import Brands from "../../data"
import '../style.css'
import { Link } from "react-router-dom";
let BrandsLi = ({aceTrue, FlyfootTrue, AddidasTrue, SapphireTrue}) => {
    return (
        <>
            <div className="brandsContentContainer w-100 d-flex flex-wrap justify-content-start">
                <Link to="/Datarendering">
                    <p className="ml-5 brandNames" onClick={aceTrue}>{Brands[0].BrandName}</p>
                </Link>
                <Link to="/Datarendering">
                    <p className="ml-5 brandNames" onClick={FlyfootTrue}>{Brands[1].BrandName}</p>
                </Link>
                <Link to="/Datarendering">
                    <p className="ml-5 brandNames" onClick={AddidasTrue}>{Brands[5].BrandName}</p>
                </Link>
                <Link to="/Datarendering">
                    <p className="ml-5 brandNames" onClick={SapphireTrue}>{Brands[6].BrandName}</p>
                </Link>


            </div>
        </>
    )
}
export default BrandsLi