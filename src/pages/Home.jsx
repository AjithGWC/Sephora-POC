import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import domo from "ryuu.js";
import { GlobalContext } from "../globalContext/context";

// Import all category images
import shampooConditionerImage from "../assets/Shampoo&Conditioner.webp";
import hairStylingImage from "../assets/HairStyle.webp";
import miniSizeImage from "../assets/MiniSize.webp";
import valueGiftSetsImage from "../assets/Value&GiftSets.jpg";
import skincare from "../assets/Skincare.webp";
import Makeup from "../assets/face.webp";

const brands = [
  { name: "L'Oréal Professionnel", color: "#F472B6" },
  { name: "Freck Beauty", color: "#FBBF24" },
];

const categoryImages = {
  "Shampoo & Conditioner": shampooConditionerImage,
  "Hair Styling & Treatments": hairStylingImage,
  "Mini Size": miniSizeImage,
  "Value & Gift Sets": valueGiftSetsImage,
  "Skincare": skincare,
  "Makeup": Makeup,
};

const Home = () => {
  const navigate = useNavigate();
  
  const {
    state: { data, loading },
    setState: { setData, setLoading, setCategory, setBrand },
  } = useContext(GlobalContext);

  const handleCategoryClick = (categoryName, brandName) => {
    setBrand(brandName);
    setCategory(categoryName);
    navigate("/product");
  };

  useEffect(() => {
    // Fetch data if not already available in context
    if (!data) {
      const fetchData = async () => {
        try {
          setLoading(true);
          // Assuming you have a global data fetch function or API call
          const fetchedData = await domo.post(
            "/sql/v1/dataset",
            `SELECT \`Brand Name\`, \`Category Name\`, \`Product Name\`, \`Monthly Total\`, \`Previous Monthly Total\`, \`Sub Category Name\`, \`Variant\` FROM dataset`,
            {
              contentType: "text/plain",
            }
          );
          
          const transformedData = {}; // Transform data structure as needed
          fetchedData.rows.forEach(([brand, category, product, sale, previousSale, subCategory, variant]) => {
            if (!transformedData[brand]) {
              transformedData[brand] = [];
            }

            let categoryObj = transformedData[brand].find((c) => c.name === category);
            if (!categoryObj) {
              categoryObj = { name: category, subCategories: [] };
              transformedData[brand].push(categoryObj);
            }
      
            let subCategoryObj = categoryObj.subCategories.find((sc) => sc.name === subCategory);
            if (!subCategoryObj) {
              subCategoryObj = { name: subCategory, products: [] };
              categoryObj.subCategories.push(subCategoryObj);
            }
      
            let productObj = subCategoryObj.products.find(p => p.name === product);
            if (!productObj) {
              productObj = { 
                name: product, 
                sales: parseFloat(sale),
                previousSales: parseFloat(previousSale || 0),
                variants: []
              };
              subCategoryObj.products.push(productObj);
            }
            
            // Add variant if it exists and is not already included
            if (variant && !productObj.variants.includes(variant)) {
              productObj.variants.push(variant);
            }
          });
      
          setData(transformedData);
          setLoading(false);
        } catch (error) {
          console.error("Fetch error:", error);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [data, setData, setLoading]);

  // Get all categories across all brands
  const allCategories = data ? 
    Object.keys(data).flatMap(brandName => 
      data[brandName].map(category => ({
        ...category,
        brandName
      }))
    ) : [];

    return (
      <>
        {data && !loading && Object.keys(data).length > 0 ? (
          <>
            <img className="relative h-screen bg-cover bg-center w-full" src="src/assets/home/background.jpg" />
            <div className="absolute top-[1%] right-0 w-full md:w-2/3"> 
              <div className="flex flex-col justify-center items-center md:items-end p-3">
                {/* Category Cards */}
                <div className="mt-3">
                  <h2 className="text-2xl font-bold text-white mb-4">Our Categories</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-5">
                    {Object.keys(categoryImages).map((categoryName) => {
                      // Find category data from the first brand that has this category
                      const categoryObj = allCategories.find(cat => cat.name === categoryName);
                      const brandName = categoryObj?.brandName || brands[0].name;
    
                      // Calculate category stats
                      let totalSales = 0;
                      let previousTotalSales = 0;
                      let variantCount = 0;
    
                      if (categoryObj) {
                        categoryObj.subCategories.forEach(subCat => {
                          subCat.products.forEach(product => {
                            totalSales += product.sales || 0;
                            previousTotalSales += product.previousSales || 0;
                            variantCount += product.variants?.length || 0;
                          });
                        });
                      }
    
                      const salesDifference = totalSales - previousTotalSales;
                      const percentChange = previousTotalSales > 0 
                        ? ((salesDifference / previousTotalSales) * 100).toFixed(1) 
                        : 0;
    
                      return (
                        <div 
                          key={categoryName}
                          className="cursor-pointer rounded-xl overflow-hidden bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full h-[300px] py-2"
                          onClick={() => handleCategoryClick(categoryName, brandName)}
                        >
                          <div className="h-44 overflow-hidden">
                            <img 
                              src={categoryImages[categoryName]} 
                              alt={categoryName}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800">{categoryName}</h3>
                            
                            {/* Display sales information */}
                            {totalSales > 0 && (
                              <div className="mt-2 mb-3">
                                <div className="flex justify-between items-center text-sm">
                                  <span>Total Sales:</span>
                                  <span className="font-semibold">₹{totalSales.toLocaleString()}</span>
                                </div>
                                
                                {previousTotalSales > 0 && (
                                  <div className="flex justify-between items-center text-xs text-gray-600 mt-1">
                                    <span>Previous:</span>
                                    <div className="flex items-center">
                                      <span className="mr-2">${previousTotalSales.toLocaleString()}</span>
                                      <span className={`px-1.5 py-0.5 rounded ${salesDifference >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {salesDifference >= 0 ? '+' : ''}{percentChange}%
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                            
                            {/* Display variants count if available */}
                            {variantCount > 0 && (
                              <div className="text-xs text-gray-500 mb-2">
                                {variantCount} variants available
                              </div>
                            )}
                            
                            <button 
                              className="mt-4 px-3 py-1 bg-[#de0f3f] text-white rounded-md hover:bg-[#c00e38] transition"
                            >
                              View Products →
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-[#de0f3f] border-t-transparent rounded-full animate-spin mb-4"></div>
                <h1 className="text-2xl text-gray-600">Loading...</h1>
              </div>
            </div>
          </>
        )}
      </>
    );
  }    

export default Home;