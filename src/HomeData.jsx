import HomeLogo from "./assets/img/Home/logo/logo_2048.gif"
import slider1img from "./assets/img/Home/slider/1.jpg"
import slider2img from "./assets/img/Home/slider/2.jpg"
import slider3img from "./assets/img/Home/slider/3.png"
import slider4img from "./assets/img/Home/slider/4.jpg"
import slider5img from "./assets/img/Home/slider/5.jpg"
import slider6img from "./assets/img/Home/slider/6.png"
import ActiveWear1 from "./assets/img/Apperalwear/active-wear.jpg"
import Activewear2 from "./assets/img/Apperalwear/activewear2.jpg"

//maincollection women
import womenImg1 from "./assets/img/mainCollection/women/1.png"
import womenImg2 from "./assets/img/mainCollection/women/2.png"
import womenImg3 from "./assets/img/mainCollection/women/3.png"
import womenImg4 from "./assets/img/mainCollection/women/4.png"

//maincollection men
import menImg1 from "./assets/img/mainCollection/men/1.png"
import menImg2 from "./assets/img/mainCollection/men/2.png"
import menImg3 from "./assets/img/mainCollection/men/3.png"
import menImg4 from "./assets/img/mainCollection/men/4.png"

//maincollection kids
import kidImg1 from "./assets/img/mainCollection/kids/1.png"
import kidImg2 from "./assets/img/mainCollection/kids/2.png"
import kidImg3 from "./assets/img/mainCollection/kids/3.png"
import kidImg4 from "./assets/img/mainCollection/kids/4.png"

//maincollection disc
import discImg1 from "./assets/img/mainCollection/discounts/1.jpg"
import discImg2 from "./assets/img/mainCollection/discounts/2.jpg"
import discImg3 from "./assets/img/mainCollection/discounts/3.png"
import discImg4 from "./assets/img/mainCollection/discounts/4.jpg"

//sale
import saleImg from "./assets/img/Sale/End-of-season-sale-DT-change_1512x.png"



const HomeData = [
    // {
    //     homeLogo: HomeLogo,
    //     navItems: ["Sale ", "New Arrivals ", "Men ", "Women ", "Girls ", "Boys ", "Brands "],
    //     preNavContent: ' FREE DELIVERY NATIONWIDE I SAME OR NEXT DAY SHIPPING I TRY BEFORE YOU BUY I 100% PRODUCT AUTHENTICITY GUARANTEED'

    // },
    {
        sliderImgs: [slider1img, slider2img, slider3img, slider4img, slider5img, slider6img],
        slider1Btns: ["FOOTWEAR", "PRET", "UNSTICHED", "ACTIVEWEAR", "ACESSORIES"],
        slider2Btns: ["WOMEN'S FLATS", "WOMEN'S HEEL", "MEN CHAPPAL'S", "MEN SANDALS"],
        slider3Btns: ["GIRLS", "BOYS"],
        slider4Btns: ["FOOTWEAR", "WESTERN APPAREL", "ACTIVEWEAR", "ACCESSORIES"],
        slider5Btns: ["UNSTICHED", "PRET"],
        slider6Btns: ["UNSTICHED", "PRET"]
    },
    {
        activeWear_apparel: [ActiveWear1, Activewear2]
    },
    {
        mainCollection: [
            {
                collectionHeading: "MAIN COLLECTIONS",
                collectionItems: ["Women", "Men", "Kids", "Discounts"]
            },
            {
                women: [womenImg1, womenImg2, womenImg3, womenImg4],
                Men: [menImg1, menImg2, menImg3, menImg4],
                Kids: [kidImg1, kidImg2, kidImg3, kidImg4],
                Discounts: [discImg1, discImg2, discImg3, discImg4],
            }
        ]
    },
    {
        sale: saleImg
    },
    {
        trendingProducts: [
            {
                trendingHeading: "TRENDING PRODUCTS",
                trendingItems: ["FOOTWEAR", "APPAREL", "BAGS & WALLETS", "ACCESSORIES"]
            }
        ]

    },
    {
        featureProducts: [
            {
                featureHeading: "FEATURED BRANDS",
            }
        ]

    }


]
export default HomeData