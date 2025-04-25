// import { useContext, useEffect } from "react";
// import { GlobalContext } from "../globalContext/context";
// import { useLocation, useNavigate } from "react-router-dom";


// const brandColors = {
//   "L'Oréal Professionnel": {
//     bg: "bg-pink-100",
//     text: "text-pink-700",
//     button: "#F472B6",
//   },
//   "Freck Beauty": {
//     bg: "bg-yellow-100",
//     text: "text-yellow-600",
//     button: "#FBBF24",
//   },
// };

// const Category = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const {
//     state: { data, brand },
//     setState: { setCategory, setBrand },
//   } = useContext(GlobalContext);

//   const handleBack = () => {
//     setBrand("");
//     navigate(-1);
//   };

//   const handleClick = (category) => {
//     setCategory(category);
//     navigate("/product");
//   };

//   useEffect(() => {
//     if (!brand || !data || !data[brand]) {
//       navigate("/");
//     }
//   }, [brand, data, navigate]);

//   console.log("........", data);
//   const categories = data[brand] || [];
//   console.log("//////", categories);

//   const colors = brandColors[brand] || {};

//   return (
//     <div className={`min-h-screen p-6 ${colors.bg}`}>
//       {/* Back Button */}
//       <button
//         onClick={handleBack}
//         className="mb-4 text-sm px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer"
//       >
//         ← Back
//       </button>

//       <div className="flex flex-col items-center gap-8">
//         <h2 className={`text-3xl font-bold ${colors.text}`}>{brand} Categories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
//           {categories.map((category) => (
//             <div 
//               key={category.name} 
//               className="card" 
//               onClick={() => handleClick(category.name)}
//             >
//               <div 
//                 className="content"
//                 style={{ 
//                   backgroundColor: colors.button,
//                   borderRadius: "22px" 
//                 }}
//               >
//                 <h3 className="text-xl font-semibold">{category.name}</h3>
//                 <span className="para">
//                   {category.products ? `${category.products.length} products` : "Explore products"}
//                 </span>
//                 <span className="link">View All →</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;


import { useContext, useEffect } from "react";
import { GlobalContext } from "../globalContext/context";
import { useLocation, useNavigate } from "react-router-dom";

// Import all images explicitly
// This requires you to manually import each image
import shampooConditionerImage from "../assets/Shampoo&Conditioner.webp";
import hairStylingImage from "../assets/HairStyle.webp";
import miniSizeImage from "../assets/MiniSize.webp";
import valueGiftSetsImage from "../assets/Value&GiftSets.jpg";
import skincare from "../assets/Skincare.webp";
import Makeup from "../assets/face.webp";

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

// Map category names to their corresponding images
const categoryImages = {
  "Shampoo & Conditioner": shampooConditionerImage,
  "Hair Styling & Treatments": hairStylingImage,
  "Mini Size": miniSizeImage,
  "Value & Gift Sets": valueGiftSetsImage,
  "Skincare": skincare,
  "Makeup": Makeup,
};

const getImageForCategory = (categoryName) => {
  return categoryImages[categoryName];
};

const Category = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    state: { data, brand },
    setState: { setCategory, setBrand },
  } = useContext(GlobalContext);

  const handleBack = () => {
    setBrand("");
    navigate(-1);
  };

  const handleClick = (category) => {
    setCategory(category);
    navigate("/product");
  };

  useEffect(() => {
    if (!brand || !data || !data[brand]) {
      navigate("/");
    }
  }, [brand, data, navigate]);

  const categories = data[brand] || [];
  const colors = brandColors[brand] || {};

  return (
    <div className={`min-h-screen w-full p-6 ${colors.bg}`}>
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-4 text-sm px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer"
      >
        ← Back
      </button>

      <div className="flex flex-col items-center gap-8 w-full">
        <h2 className={`text-3xl font-bold ${colors.text}`}>{brand} Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-6xl">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="card" 
              onClick={() => handleClick(category.name)}
            >
              <div 
                className="content"
                style={{ 
                  backgroundColor: colors.button,
                  borderRadius: "22px" 
                }}
              >
                <div className="flex items-center w-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <span className="para">
                      {category.products ? `${category.products.length} products` : "Explore products"}
                    </span>
                    <span className="link">View All →</span>
                  </div>
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-white ml-4">
                    <img 
                      src={getImageForCategory(category.name)} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;