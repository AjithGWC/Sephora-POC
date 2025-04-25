import React from "react";

const PercentageSlider = ({ percentage }) => {
  return (
    <div className="w-full max-w-xl mx-auto h-[80%] mt-8 flex flex-col justify-center">
      <div className="px-4">
        <div className="relative w-full h-2 bg-[#7a4e5d] rounded-full">
            <div
            className="absolute top-0 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
            ></div>

            <input
            type="range"
            min="0"
            max="100"
            value={percentage}
            readOnly
            className="absolute w-full h-2 opacity-0 cursor-not-allowed"
            />
            
            <div
            className="absolute top-[-2px] w-3 h-3 bg-[#7a4e5d] rounded-full shadow-md border-2 border-white"
            style={{ left: `calc(${percentage}% - 10px)` }}
            ></div>
        </div>
      </div>
      <div className="flex justify-between text-sm mb-1 text-stone-700">
        <span>Female</span>
        <span>Male</span>
      </div>
      <div className="text-center mt-2 text-sm text-gray-700">
        {/* {percentage}% value position */}
      </div>
    </div>
  );
};

export default PercentageSlider;
