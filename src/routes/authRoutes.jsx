import UserForm from "../forms/UserForm";
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
  {
    path: AUTH_ROUTES.ADD_USER,
    element: <UserForm />,
  },
  {
    path: AUTH_ROUTES.EDIT_USER,
    element: <UserForm />,
  },
];