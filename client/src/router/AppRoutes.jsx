import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={ROUTER.REGISTER_ROUTE} element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
