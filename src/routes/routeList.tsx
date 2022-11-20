import Home from "../pages/home/Home";
import * as types from "../types";
import ROUTE_PATHS from "./routesPath";


const routes: types.route[] = [
  
  {
    path: ROUTE_PATHS.HOME,
    component: <Home />,
    exact: true,
  }
];

export default routes;
