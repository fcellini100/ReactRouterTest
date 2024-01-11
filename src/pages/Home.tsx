import zaza from "../assets/zaza_cat.jpg";

const Home = () => {
  return (
    <>
      <h1 className="bg-orange-200 font-bold text-3xl w-full text-center">
        Home
      </h1>
      <img src={zaza} alt="Zaza" className="m-auto p-2" />
    </>
  );
};

export default Home;
