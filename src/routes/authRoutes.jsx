import Dashboard from "../pages/Dashboard";
import UserList from "../pages/UserList";
import { AUTH_ROUTES } from "./routes";


export const authRoutes = [
  {
    path: AUTH_ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: AUTH_ROUTES.USERS,
    element: <UserList />,
  },
];