import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
export const productContext = createContext();
const img1 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/3/4/9a1f3827-ae2b-4806-8f8b-daa3839a35231583274718907-1.jpg"
const img2 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/11/17b8afaa-63f0-4c25-a7f6-ab24ada940261570798163051-1.jpg"
const img3 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/11/13/64d79803-04c1-4e69-a6eb-6bcfffc482eb1542071867707-1.jpg"
const img4 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12394832/2020/9/2/1592386e-910e-4abc-877d-12d99ae3a8281599054238934Vishudh1.jpg"
const img5 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10308617/2019/7/29/bd8f2ff9-186b-4983-b9b6-88654f2d13661564380201384-SASSAFRAS-Women-Blue-A-Line-Dress-9861564380199640-1.jpg"
const img6 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10307023/2019/11/18/60bcbddd-429c-4941-a150-e6e5feac53b11574060753583-IMARA-Women-Lehenga-Choli-2371574060750688-1.jpg"
const img7 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11530712/2020/3/16/42b87877-eac1-4314-a988-005bdce26bf91584339589545-Mitera-Women-Lehenga-Choli-4231584339586636-1.jpg"
const img8 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9088507/2019/4/1/f7d75507-390b-4cf1-80d2-b18cfe7f723d1554113656488-Libas-Women-Yellow-Printed-Maxi-Dress-5211554113654170-1.jpg"
const img9 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9077001/2019/3/29/603509bf-554b-4977-bb5e-887adee876bb1553849150003-Satrani--Poly-Silk-Grey-Lehengha-Choli-7361553849148943-1.jpg"
const img10 = "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/9/ed6f1c50-1845-4a66-a8f1-ccf56a7d1b631549736220739-1.jpg"

const shoes1="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11419726/2020/5/22/c9b5651e-9d04-468a-a055-e3fb34701c001590130230476PumaUnisexBlackBMWMMotorsportDriftCat8RunningShoes1.jpg"
const shoes2="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11089858/2019/12/13/d2c68f17-3b9f-486c-83c6-9b454d15d8931576216948808-Skechers-Women-Mauve-GO-WALK-LITE-FLORET-Walking-Shoes-11615-1.jpg"
const shoes3="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12450676/2020/9/15/482fd27c-4d59-4134-b570-fa5ddbb41bd21600169676127na1.jpg"
const shoes4="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11261310/2020/8/10/c6f4298c-2ad9-46c0-be5e-fc30914c2e661597043454103-HRX-by-Hrithik-Roshan-Women-Sports-Shoes-8071597043452859-1.jpg"
const shoes5="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11419726/2020/5/22/c9b5651e-9d04-468a-a055-e3fb34701c001590130230476PumaUnisexBlackBMWMMotorsportDriftCat8RunningShoes1.jpg"
const shoes6="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11096768/2020/2/20/e13d8c92-e401-4205-9727-009a79bc0e551582182840126-Carlton-London-sports-Women-Black-Self-Striped-Running-Shoes-1.jpg"
const shoes7="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/1/913b5ebf-356d-4850-a766-0aa5370fcc7e1593553699342-1.jpg"
const shoes8="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9283349/2019/7/5/da66e1a3-7eeb-4055-ad5e-663e590849061562307227665-Crew-STREET-Women-Purple-Textile-Running-Shoes-8111562307227-1.jpg"
const shoes9="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11096784/2019/12/13/571111ef-3249-4f0f-ab67-dec1cedf83811576215520405-Carlton-London-sports-Women-Peach-Coloured-Flatform-Running--1.jpg"
const shoes10="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/11/e63cf064-3903-4e56-aded-b0c6bf246eb21599776364975-1.jpg"

const jewel1="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/1/18/a562d5c6-be6c-4871-a064-a4c0c05aa8df1547817077168-1.jpg"
const jewel2="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10665388/2020/1/8/fee2f94f-01ed-4e1c-9f2d-60683a5681c01578476392821-KARATCART-Off-White-Gold-Plated-Kundan-Studded--Beaded-Handc-1.jpg"
const jewel3="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10521750/2019/9/3/05b493f4-a101-46fd-abcb-192a7e3bd97a1567511920069-Jewels-Galaxy-Women-Necklace-and-Chains-7611567511919844-1.jpg"
const jewel4="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/8/25/04bfc4e1-1864-4400-9c26-4f4ebf1c69761598306919813-1.jpg"
const jewel5="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8760605/2019/6/15/ade64842-6e88-444b-a757-87e211ec93f11560595048460-Peora-Women-Gold-Plated-Kundan-Beaded--Stone-Studded-Jewelle-1.jpg"
const jewel6="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1875380/2017/11/2/11509617847632-Rubans-Oxidised-Silver--Antique-Gold-Toned-Dome-Shaped-Jhumkas-6301509617847600-1.jpg"
const jewel7="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9396155/2019/4/24/1d0e9faa-b78a-44c1-9d9e-2cfe3abe36471556089299523-PANASH-Women-Gold-Plated-Pink--Off-White-Pearls-Beaded-Ename-1.jpg"
const jewel8="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8643827/2019/4/23/ad6e73bb-f9ef-4304-b921-269a371269c21555998667038-Zaveri-Pearls-Gold-Toned-Kundan--Green-Beaded-Jewellery-Set--1.jpg"
const jewel9="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/9/5cc1adf8-6539-4a50-9412-5062c8c215011599606096926-1.jpg"
const jewel10="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5466662/2020/9/14/56300d3c-89da-4bc8-9d7c-f1ea6d11b3261600022420064RubansGold-TonedAntiqueNecklaceSetWithMaangTika1.jpg"


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Libbas', price: 40, image: img1, productStatus: 'hot'},
        {id: 2, name: 'U&F', price: 200, image: img2,productStatus: 'new'},
        {id: 3, name: 'ParasS', price: 300, image: img3,productStatus: 'new'},
        {id: 4, name: 'Nash', price: 150, image: img4,productStatus: 'new'},
        {id: 5, name: 'Tanshi', price: 160, image: img5,productStatus: 'hot'},
        {id: 6, name: 'Waram', price: 500, image: img6,productStatus: 'new'},
        {id: 7, name: 'Kaisla', price: 240, image: img7,productStatus: 'hot'},
        {id: 8, name: 'Nisa', price: 120, image: img8,productStatus: 'new'},
        {id: 9, name: 'Pranns', price: 500, image: img9,productStatus: 'new'},
        // {id: 10, name: 'Nokion', price: 240, image: img10,productStatus: 'hot'},
        
      ])

      const [shoes] = useReducer(ProductReducer, [
        {id: 11, name: 'HRX', price: 40, image: shoes1, productStatus: 'hot'},
        {id: 12, name: 'PUMA', price: 200, image: shoes2,productStatus: 'new'},
        {id: 13, name: 'ASICS', price: 300, image: shoes3,productStatus: 'new'},
        {id: 14, name: 'NCDF', price: 150, image: shoes4,productStatus: 'new'},
        {id: 15, name: 'Mode By Red', price: 160, image: shoes5,productStatus: 'hot'},
        {id: 16, name: 'JKFK', price: 500, image: shoes6,productStatus: 'new'},
        {id: 17, name: 'LLNM', price: 240, image: shoes7,productStatus: 'hot'},
        {id: 18, name: 'PARAS', price: 120, image: shoes8,productStatus: 'new'},
        {id: 19, name: 'SPORT', price: 500, image: shoes9,productStatus: 'new'},
        // {id: 20, name: 'PLAY', price: 240, image: shoes10,productStatus: 'hot'},
        
      ])

      const [jewel] = useReducer(ProductReducer, [
        {id: 21, name: 'Jewel Galaxy', price: 40, image: jewel1, productStatus: 'hot'},
        {id: 22, name: 'Jewel T', price: 200, image: jewel2,productStatus: 'new'},
        {id: 23, name: 'Jewel MNs', price: 300, image: jewel3,productStatus: 'new'},
        {id: 24, name: 'Jewel Para', price: 150, image: jewel4,productStatus: 'new'},
        {id: 25, name: 'Jewel Tapsi', price: 160, image: jewel5,productStatus: 'hot'},
        {id: 26, name: 'Jewel Tansh', price: 500, image: jewel6,productStatus: 'new'},
        {id: 27, name: 'Jewel Vara', price: 240, image: jewel7,productStatus: 'hot'},
        {id: 28, name: 'Jewel Nash', price: 120, image: jewel8,productStatus: 'new'},
        {id: 29, name: 'Jewel Simpa', price: 500, image: jewel9,productStatus: 'new'},
        // {id: 30, name: 'Jewel Nahi', price: 240, image: jewel10,productStatus: 'hot'},
        
      ])
      
    return(
        <productContext.Provider value={{products,shoes,jewel}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;