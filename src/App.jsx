import { BrowserRouter, Routes, Route } from "react-router-dom";
import { noAuthRoutes } from "./routes/noAuthRoutes";
import { authRoutes } from "./routes/authRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {noAuthRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
             element={
          <PublicRoute>
            {route.element}
          </PublicRoute>
        }
          />
        ))}

        {authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
             element={
          <ProtectedRoute>
            {route.element}
          </ProtectedRoute>
        }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;