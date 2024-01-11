import { useQuery } from "react-query";
import { getNavigation } from "../api/api.mock";
import { Link, NavLink } from "react-router-dom";
import { RoutesEnum } from "../models/enums";

const NavBar = () => {
  const { data: navigation, isLoading } = useQuery(
    "mockNavigation",
    getNavigation,
  );

  const renderNavList = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!navigation) {
      return <div>No navigation items available 😢</div>;
    }

    const routeList = navigation.map((item, index) => (
      <li key={index}>
        <NavLink to={item.path} className="hover:text-gray-300 navbar">
          {item.title}
        </NavLink>
      </li>
    ));
    return routeList;
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to={RoutesEnum.HOME} className="hover:text-gray-300">
            🏠
          </Link>
        </div>
        <ul className="flex space-x-4">{renderNavList()}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
