import { useNavigate } from "react-router-dom";

const BrandCard = ({ name, color }) => {
    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col gap-2">
        <div
          onClick={() =>
            navigate("/category", {
              state: { brand: name },
            })
          }
          className="p-6 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform text-white font-bold text-xl text-center"
          style={{ backgroundColor: color }}
        >
          {name} Categories
        </div>
      </div>
    );
};

export default BrandCard;
  