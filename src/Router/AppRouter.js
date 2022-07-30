import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login, Register, Dashboard } from "../Pages";

const logged = false;

const Private = ({ logged, children }) => {
  return !logged ? <Navigate to="/login" replace /> : children;
};

const Public = ({ logged, children }) => {
  return logged ? <Navigate to="/" replace /> : children;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Private logged={logged}>
              <Dashboard />
            </Private>
          }
        />
        <Route
          path="/login"
          element={
            <Public logged={logged}>
              <Login />
            </Public>
          }
        />
        <Route
          path="/registro"
          element={
            <Public logged={logged}>
              <Register />
            </Public>
          }
        />
        <Route path="*" element={<p>🔍Ruta no administrada🔎</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
