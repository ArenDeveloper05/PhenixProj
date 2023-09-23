import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_ROUTE} element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
