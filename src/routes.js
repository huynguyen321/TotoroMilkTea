import Admin from "./App/Adminpage";
import Home from "./App/Homepage";
import NotFound from "Components/NotFound/index";

import AdsManagement from "./Components/Admin/AdsManagement";
import OrderManagement from "Components/Admin/OrderManagement";
import ProductManagement from "Components/Admin/ProductManagement";
import UserManagement from "Components/Admin/UserManagement";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/home",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/admin",
    exact: false,
    main: ({ match }) => <Admin match={match} />,
  },
  {
    path: "*",
    exact: false,
    main: () => <NotFound />,
  },
];

const amdinRoutes = [
  {
    path: "/admin/",
    exact: true,
    main: () => <AdsManagement />,
  },
  {
    path: "/admin/ads",
    exact: true,
    main: () => <AdsManagement />,
  },
  {
    path: "/admin/orders",
    exact: true,
    main: () => <OrderManagement />,
  },
  {
    path: "/admin/products",
    exact: true,
    main: () => <ProductManagement />,
  },
  {
    path: "/admin/users",
    exact: true,
    main: () => <UserManagement />,
  }
];

export { routes, amdinRoutes };