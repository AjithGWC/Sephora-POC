import LineChart2 from "../chart/line2";
import LineChart1 from "../chart/line1";
import React from "react";
import PieChart from "../chart/pie";
import BarChart1 from "../chart/bar1";
import BarChart2 from "../chart/bar2";
import PercentageSlider from "../chart/percentage";

const SlideContent = ({brand, productName}) => {
    console.log(".....................");
    console.log(brand, productName);
    
    return(
        <>
            <h1 className="header">{productName}</h1>
            {/* <h1>{productName}</h1> */}
            <div className="flex flex-col gap-2 mb-4 pb-3 pt-2 h-[95%]">
                <div class="grid grid-cols-4 gap-1">
                    <div className="bg-white/25 bg-opacity-25 py-1 px-2 rounded-lg">
                        <h1>Country Wise Cost</h1>
                        <LineChart1 />
                    </div>
                    <div className="bg-white/25 bg-opacity-25 p-2 rounded-lg">
                        <h1>Gender Percentage</h1>
                        <PercentageSlider percentage={65} />
                    </div>
                    <div className="flex flex-col gap-2 mb-4 h-full">
                        <div className="bg-white/25 bg-opacity-25 p-2 rounded-lg h-full">21</div>
                        <div className="bg-white/25 bg-opacity-25 p-2 rounded-lg h-full">21</div>
                    </div>
                    <div className="bg-white/25 bg-opacity-25 p-2 rounded-lg">
                        <h1>Channel Name</h1>
                        <BarChart2 />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-stretch h-[90%]">
                    <div className="bg-white/25 bg-opacity-25 pt-2 rounded-lg h-[93%]">
                        <h1 className="pl-3">Channel Type</h1>
                        <div className="h-full max-h-[180px] overflow-hidden">
                            <PieChart />
                        </div>
                    </div>
                    <div className="bg-white/25 bg-opacity-25 p-2 rounded-lg h-[93%]">
                        <h1>Most Sales</h1>
                        <BarChart1 />
                    </div>
                    <div className="flex flex-col gap-2 h-[93%]">
                        <div className="bg-white/25 bg-opacity-25 p-2 rounded-lg h-full">
                            <h1>Country Wise Selling Cost</h1>
                            <LineChart2 />
                        </div>
                        {/* <div className="grid grid-cols-2 gap-2 h-full">
                            <div className="bg-white/25 bg-opacity-25 p-2 rounded-lg h-full">21</div>
                            <div className="bg-white/25 bg-opacity-25 p-2 rounded-lg h-full">21</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SlideContent;