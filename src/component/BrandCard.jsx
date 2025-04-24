import { useContext } from "react";
import { GlobalContext } from "../globalContext/context";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ name, color }) => {
  const navigate = useNavigate();
  const {
    state: { data },
    setState: { setBrand },
  } = useContext(GlobalContext);

  const categories = data[name] || [];

  const handleClick = () => {
    setBrand(name);

    navigate("/category");
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={handleClick}
        className="p-6 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform text-white font-bold text-xl text-center"
        style={{ backgroundColor: color }}
      >
        {name} Categories
      </div>
    </div>
  );
};

export default BrandCard;
