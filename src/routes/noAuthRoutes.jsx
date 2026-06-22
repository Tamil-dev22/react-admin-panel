import Login from "../authComponents/Login";
import { NO_AUTH_ROUTES } from "./routes";

export const noAuthRoutes = [
  {
    path: NO_AUTH_ROUTES.LOGIN,
    element: <Login />,
  },
];