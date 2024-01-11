import { useLocation, useNavigate } from "react-router-dom";
import { IData } from "../models/interfaces";

const ViewData = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: IData };
  return (
    <div className="w-1/2 m-auto p-24">
      <h1 className="text-red-500">{state.name}</h1>
      <div className="p-2 mb-2">
        <p>{state.value1}</p>
        <p>{state.value2}</p>
        <p>{state.value3}</p>
      </div>

      <button className="disabled:bg-slate-950" onClick={() => navigate(-1)}>
        ⬅️ Back
      </button>
    </div>
  );
};

export default ViewData;
