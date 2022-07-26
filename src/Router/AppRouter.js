import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, Register, Dashboard } from "../Pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="*" element={<p>🔍Ruta no administrada🔎</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
