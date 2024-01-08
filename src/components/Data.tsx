import { useQuery } from "react-query";
import { getData } from "../api/api.mock";
import { Link } from "react-router-dom";

const Data = () => {
  const { data: dataList, isLoading } = useQuery("mockData", getData);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading list of data...</div>;
    }
    if (!dataList) {
      return <div>No data available</div>;
    }
    const renderedData = dataList.map((data) => (
      <li key={data.id}>
        <Link
          to={data.id.toString()}
          className="hover:text-gray-300 cursor-pointer"
          state={data}
        >
          {data.name}
        </Link>
      </li>
    ));
    return renderedData;
  };

  return (
    <>
      <h1 className="bg-orange-200 font-bold text-3xl w-full text-center">
        Data
      </h1>

      <ul className="p-4">{renderData()}</ul>
    </>
  );
};

export default Data;
