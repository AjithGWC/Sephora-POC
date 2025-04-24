import React from "react";

const SlideContent = ({brand, productName}) => {
    console.log(".....................");
    console.log(brand, productName);
    
    return(
        <>
            <h1>{brand}</h1>
            <h1>{productName}</h1>
        </>
    );
}

export default SlideContent;