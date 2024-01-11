import { Routes, Route } from "react-router-dom";
import { RoutesEnum } from "../models/enums";
import About from "../pages/About";
import Data from "../pages/Data";
import Home from "../pages/Home";
import ViewData from "../pages/ViewData";
import NotFound from "../pages/NotFound";

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
