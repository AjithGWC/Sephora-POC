import React from "react";

const SlideContent = ({brand, productName}) => {
    console.log(".....................");
    console.log(brand, productName);
    
    return(
        <>
            <h1 className="header">{productName}</h1>
            {/* <h1>{productName}</h1> */}
            <div className="flex flex-col gap-2 mb-4 p-5 h-[95%]">
                <div class="grid grid-cols-4 gap-1">
                    <div className="bg-white/25 p-5 rounded-lg">21</div>
                    <div className="bg-white/25 p-5 rounded-lg">21</div>
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="bg-white/25 p-2 rounded-lg">21</div>
                        <div className="bg-white/25 p-2 rounded-lg">21</div>
                    </div>
                    <div className="bg-white/25 p-5 rounded-lg">21</div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-stretch h-full">
                    <div className="bg-white/25 p-5 rounded-lg h-full">21</div>
                    <div className="bg-white/25 p-5 rounded-lg h-full">21</div>
                    <div className="flex flex-col gap-2 h-full">
                    <div className="bg-white/25 p-2 rounded-lg h-full">21</div>
                    <div className="grid grid-cols-2 gap-2 h-full">
                        <div className="bg-white/25 p-2 rounded-lg">21</div>
                        <div className="bg-white/25 p-2 rounded-lg">21</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SlideContent;