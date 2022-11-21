import Favourite from "../pages/favourite/Favourite";
import Home from "../pages/home/Home";
import * as types from "../types";
import ROUTE_PATHS from "./routesPath";


const routes: types.route[] = [
  
  {
    path: ROUTE_PATHS.HOME,
    component: <Home />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.FAVOURITE,
    component: <Favourite />,
    exact: true,
  }
];

export default routes;
