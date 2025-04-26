import { useContext, useEffect } from "react";
import BrandCard from "../component/BrandCard";
import domo from "ryuu.js";
import { GlobalContext } from "../globalContext/context";
import loreal from '../assets/home/loreal1.jpg';
import freck_beauty from '../assets/home/freck_beauty1.jpg'

const brands = [
  { name: "L'Oréal Professionnel", color: "#F472B6" },
  { name: "Freck Beauty", color: "#FBBF24" },
];

const Home = () => {
  const {
    state: { data, loading },
    setState: { setData, setLoading },
  } = useContext(GlobalContext);

  useEffect(() => {
    // Fetch data if not already available in context
    if (!data) {
      const fetchData = async () => {
        try {
          // Assuming you have a global data fetch function or API call
          const fetchedData = await domo.post(
            "/sql/v1/dataset",
            `SELECT \`Brand Name\`, \`Category Name\`, \`Product Name\`, \`Monthly Total\` FROM dataset`,
            {
              contentType: "text/plain",
            }
          );
          // console.log("fechhhhhhhhhhh", fetchedData)
          const transformedData = {}; // Transform data structure as needed
          fetchedData.rows.forEach(([brand, category, product, sale]) => {
            if (!transformedData[brand]) {
              transformedData[brand] = [];
            }
            let categoryObj = transformedData[brand].find(c => c.name === category);
            if (!categoryObj) {
              categoryObj = { name: category, products: [] };
              transformedData[brand].push(categoryObj);
            }
            if (!categoryObj.products.some(p => p.name === product)) {
              categoryObj.products.push({ name: product, sales: parseFloat(sale) });
            }
          });
          console.log(".........", transformedData);

          setLoading(false);
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
      {data && !loading && Object.keys(data).length > 0 ? (
        <>
          <img className="relative h-screen bg-cover bg-center w-full" src="src/assets/home/background.jpg" />
          <div className="absolute top-[15%] right-[10%]"> 
            <div className=" flex flex-col justify-center items-center gap-8 p-6 ">
              {/* <h1 className="text-3xl font-bold text-gray-800">Choose Your Brand</h1> */}
              <div className=" bg-[#8B3A3A]/80 p-8 rounded-xl text-[#FBD2C0] max-w-xl ">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fca88a] mb-10">BEAUTY SPACE</h1>
                <p className="text-md leading-relaxed mb-4 text-[#EACDC4]">
                  The Cannes International Film Festival is underway. We start looking
                  at the blog of celebrities who came to the festival in Cannes. And
                  today under the microscope — Laetitia Casta and her dress.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
                {brands.map((b) => (
                  <BrandCard key={b.name} name={b.name} color={b.color} image={b.name == "L'Oréal Professionnel" ? loreal : freck_beauty } />
                ))}
              </div>
            </div>
          </div>
        </>
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
