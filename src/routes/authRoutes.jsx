import Dashboard from "../pages/Dashboard";
import { AUTH_ROUTES } from "./routes";


export const authRoutes = [
  {
    path: AUTH_ROUTES.DASHBOARD,
    element: <Dashboard />,
  },

];