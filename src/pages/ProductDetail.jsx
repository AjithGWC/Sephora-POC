import { useLocation, useNavigate } from "react-router-dom";
import SlidingPanels from "../component/SlidingPanels";

const brandColors = {
  "L'Oréal Professionnel": {
    bg: "bg-pink-100",
    text: "text-pink-700",
  },
  "Freck Beauty": {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
};

const Product = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const brand = state?.brand || "Unknown";
  const categoryName = state?.categoryName || "Unnamed";
  const products = state?.products || [];

  const colors = brandColors[brand] || {};

  return (
    <div className={`min-h-screen p-6 ${colors.bg}`}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer"
      >
        ← Back
      </button>

      <div className="flex flex-col items-center gap-4">
        <h2 className={`text-3xl font-bold ${colors.text}`}>
          {brand} - {categoryName}
        </h2>
        {products.length > 0 ? (
          <SlidingPanels brand={brand} products={products} />
        ) : (
          <p className="text-gray-600 mt-4">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
