import BrandCard from "../component/BrandCard";

const brands = [
  { name: "L'Oréal Professionnel", color: "#F472B6" },
  { name: "Freck Beauty", color: "#FBBF24" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 p-6 bg-gradient-to-br from-pink-50 to-yellow-50">
      <h1 className="text-3xl font-bold text-gray-800">Choose Your Brand</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
        {brands.map((b) => (
          <BrandCard key={b.name} name={b.name} color={b.color} />
        ))}
      </div>
    </div>
  );
};

export default Home;
