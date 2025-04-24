import { useContext } from "react";
import { GlobalContext } from "../globalContext/context";
import { useLocation, useNavigate } from "react-router-dom";

const brandColors = {
  "L'Oréal Professionnel": {
    bg: "bg-pink-100",
    text: "text-pink-700",
    button: "#F472B6",
  },
  "Freck Beauty": {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    button: "#FBBF24",
  },
};

// const brandCategories = {
//     "L'Oréal Professionnel": [
//       { name: "Hair Styling & Treatments", products: [
//         { name: "Absolut Repair 10-In-1 Hair Oil for Dry Hair" }, 
//         { name: "Absolut Repair Molecular Hair Mask for Damaged Hair" }, 
//         { name: "Absolut Repair Molecular Leave-In Cream for Damaged Hair" }, 
//         { name: "Absolut Repair Molecular Rinse-Off Serum for Damaged Hair" }, 
//         { name: "Curl Expression Defining Leave-In Jelly" }, 
//         { name: "Curl Expression Moisturizing Leave-In Cream" }, 
//         { name: "Metal Detox Anti-Breakage Hair Mask" }, 
//         { name: "Metal Detox Anti-Breakage Hair Oil" }, 
//         { name: "Metal Detox Anti-Breakage Leave-In Styling Cream" }, 
//         { name: "Metal Detox Anti-Breakage Pre-Shampoo Treatment" }, 
//         { name: "Vitamino 10-In-1 Color Care" }] 
//       },
//       { name: "Mini Size", products: [{ name: "Mini Shampoo" }, { name: "Mini Conditioner" }] },
//       { name: "Shampoo & Conditioner", products: [{ name: "Shampoo A" }, { name: "Conditioner B" }] },
//       { name: "Value & Gift Sets", products: [{ name: "Gift Set 1" }, { name: "Gift Set 2" }] },
//     ],
//     "Freck Beauty": [
//       { name: "Makeup", products: [{ name: "Freck Pen" }, { name: "Freck Blush" }] },
//       { name: "Skincare", products: [{ name: "Freck Cleanser" }, { name: "Freck Moisturizer" }] },
//     ],
// };  

const Category = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const {
      state: { data, brand },
      setState: { setCategory, setBrand },
    } = useContext(GlobalContext);

    const handleBack = () => {
      setBrand("");
      navigate(-1)
    }

    const handleClick = (category) => {
      setCategory(category);

      navigate("/product");
    }
    
    console.log("........", data);
    const categories = data[brand] || [];
    console.log("//////", categories);
    
    // const brand = state?.brand || "Unknown";
    const colors = brandColors[brand] || {};
    // const categories = brandCategories[brand] || [];
  
    return (
        <div className={`min-h-screen p-6 ${colors.bg}`}>
            {/* Back Button */}
            <button
                onClick={handleBack}
                className="mb-4 text-sm px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer"
            >
            ← Back
            </button>
    
            <div className="flex flex-col items-center gap-6">
            <h2 className={`text-3xl font-bold ${colors.text}`}>{brand} Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
                {categories.map((category) => (
                <div key={category.name} className="p-4 rounded-lg shadow-md text-white font-semibold hover:scale-105 transition-transform cursor-pointer" style={{ backgroundColor: colors.button }} 
                  onClick={() => handleClick(category.name)}
                >
                    <button
                      className="cursor-pointer"
                        key={category.name}
                    >
                        {category.name}
                    </button>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Category;
