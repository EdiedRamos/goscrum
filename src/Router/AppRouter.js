import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login, Register, Dashboard, NotFound } from "../Pages";

import { useSelector } from "react-redux";

const Private = ({ logged, children }) => {
  return !logged ? <Navigate to="/login" replace /> : children;
};

const Public = ({ logged, children }) => {
  return logged ? <Navigate to="/" replace /> : children;
};

const AppRouter = () => {
  const logged = useSelector((store) => store.sesionReducer.loggedIn);
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
