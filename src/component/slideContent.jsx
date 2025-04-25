import LineChart2 from "../chart/line2";
import LineChart1 from "../chart/line1";
import React, { useContext, useEffect } from "react";
import PieChart from "../chart/pie";
import BarChart1 from "../chart/bar1";
import BarChart2 from "../chart/bar2";
import PercentageSlider from "../chart/percentage";
import { GlobalContext } from "../globalContext/context";
import domo from "ryuu.js";

const SlideContent = ({ brand, productName }) => {
    // console.log(brand, productName);

    const {
        state: { category, product },
        // setState: { setActiveIndex, setProduct },
    } = useContext(GlobalContext);
    // console.log(".....................", category);

    useEffect(() => {
        const fetchCountryTransaction = async () => {
            try {
                const query = `
                    SELECT \`Country\`, SUM(\`Total Transactions\`) AS total_transactions
                    FROM dataset
                    WHERE \`Product Name\` = '${productName}'
                    GROUP BY \`Country\`
                `;
                
                const fetchedData = await domo.post(
                    "/sql/v1/dataset",
                    query,
                    {
                        contentType: "text/plain",
                    }
                );  
                const countryTransactions = fetchedData.rows.reduce((acc, [country, totalTransactions]) => {
                    acc[country] = totalTransactions;
                    return acc;
                }, {});
    
                console.log("Country wise total transactions:", countryTransactions);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        const fetchChannelType = async() => {
            try {
                const fetchedData = await domo.post(
                    "/sql/v1/dataset",
                    `SELECT \`Channel_Type\`, COUNT(\`Channel_Type\`) AS \`Channel_Type_Count\`
                    FROM dataset
                    WHERE \`Product Name\` = '${productName}'
                    GROUP BY \`Channel_Type\``,
                    {
                        contentType: "text/plain",
                    }
                );

                const channelType = fetchedData.rows.reduce((acc, [Channel_Type, total]) => {
                    acc[Channel_Type] = total;
                    return acc;
                }, {});
                console.log("Fetched data with Channel Type count:", channelType);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
    
        if (productName){
            fetchCountryTransaction();
            fetchChannelType();
        }
    }, [productName]);    

    return (
        <div className="relative w-full h-full">
            {/* Background Image */}
            {/* {console.log("???????", `/assets/products/${category}/${productName}.png`)} */}
            <img
                src={`src/assets/products/${category}/${productName}.png`}
                // src="src/assets/products/Hair Styling & Treatments/Metal Detox Anti-Breakage Pre-Shampoo Treatment.png" 
                alt="Background"
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-full h-full object-contain"
            />
            {/* Overlay Content */}
            <div className="relative z-10  h-full">
                <h1 className="header text-stone-700 font-semibold">{productName}</h1>

                <div className="flex flex-col gap-2 mb-4 pb-3 pt-2 h-[95%] text-stone-700 font-semibold">
                    <div className="grid grid-cols-4 gap-1">
                        <div className="bg-white/40 py-1 px-2 rounded-lg">
                            <h1>Country's Total Transaction</h1>
                            <LineChart1 />
                        </div>
                        <div className="bg-white/40 p-2 rounded-lg">
                            <h1>Gender Percentage</h1>
                            <PercentageSlider percentage={65} />
                        </div>
                        <div className="flex flex-col gap-2 mb-4 h-full">
                            <div className="bg-white/40 p-2 rounded-lg h-full">21</div>
                            <div className="bg-white/40 p-2 rounded-lg h-full">21</div>
                        </div>
                        <div className="bg-white/40 p-2 rounded-lg">
                            <h1>Channel Name</h1>
                            <BarChart2 />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 items-stretch h-[90%]">
                        <div className="bg-white/40 pt-2 rounded-lg h-[93%]">
                            <h1 className="pl-3">Channel Type</h1>
                            <div className="h-full max-h-[180px] overflow-hidden">
                                <PieChart />
                            </div>
                        </div>
                        <div className="bg-white/40 p-2 rounded-lg h-[93%]">
                            <h1>Most Sales</h1>
                            <BarChart1 />
                        </div>
                        <div className="flex flex-col gap-2 h-[93%]">
                            <div className="bg-white/40 p-2 rounded-lg h-full">
                                <h1>Country Wise Selling Cost</h1>
                                <LineChart2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SlideContent;