import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
// SCSS
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
