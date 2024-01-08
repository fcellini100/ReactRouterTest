import { Routes, Route } from "react-router-dom";
import { RoutesEnum } from "../models/enums";
import About from "../components/About";
import Data from "../components/Data";
import Home from "../components/Home";
import ViewData from "../components/ViewData";
import NotFound from "../components/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.HOME} element={<Home />} />
      <Route path={RoutesEnum.ABOUT} element={<About />} />
      <Route path={RoutesEnum.DATA}>
        <Route index element={<Data />} />
        <Route path={":id"} element={<ViewData />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
