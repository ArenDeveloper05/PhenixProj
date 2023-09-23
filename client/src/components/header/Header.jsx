import HeaderLogo from "./header-logo/HeaderLogo";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <HeaderLogo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
