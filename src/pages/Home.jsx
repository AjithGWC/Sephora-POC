import { useContext, useEffect } from "react";
import BrandCard from "../component/BrandCard";
import domo from "ryuu.js";
import { GlobalContext } from "../globalContext/context";

const brands = [
  { name: "L'Oréal Professionnel", color: "#F472B6" },
  { name: "Freck Beauty", color: "#FBBF24" },
];

const Home = () => {

  const {
    state: { data },
    setState: { setData },
  } = useContext(GlobalContext);

  useEffect(() => {
    // Fetch data if not already available in context
    if (!data) {
      const fetchData = async () => {
        try {
          // Assuming you have a global data fetch function or API call
          const fetchedData = await domo.post(
            "/sql/v1/dataset",
            `SELECT \`Brand Name\`, \`Category Name\`, \`Product Name\` FROM dataset`,
            {
              contentType: "text/plain",
            }
          );
          const transformedData = {}; // Transform data structure as needed
          fetchedData.rows.forEach(([brand, category, product]) => {
            if (!transformedData[brand]) {
              transformedData[brand] = [];
            }
            let categoryObj = transformedData[brand].find(c => c.name === category);
            if (!categoryObj) {
              categoryObj = { name: category, products: [] };
              transformedData[brand].push(categoryObj);
            }
            if (!categoryObj.products.some(p => p.name === product)) {
              categoryObj.products.push({ name: product });
            }
          });
          console.log(".........", transformedData);
          
          setData(transformedData);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
      fetchData();
    }
  }, [data, setData]);

  return (
    <>
      {data && Object.keys(data).length > 0 ? (
        <div className="min-h-screen flex flex-col justify-center items-center gap-8 p-6 bg-gradient-to-br from-pink-50 to-yellow-50">
          <h1 className="text-3xl font-bold text-gray-800">Choose Your Brand</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
            {brands.map((b) => (
              <BrandCard key={b.name} name={b.name} color={b.color} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
            <h1 className="text-2xl text-gray-600 animate-pulse">Loading...</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
