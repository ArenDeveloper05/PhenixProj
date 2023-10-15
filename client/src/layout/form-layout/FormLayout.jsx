import "./FormLayout.scss";
import "animate.css";

const FormLayout = ({ image, children, type }) => {
  return (
    <section
      className="formLayout"
      style={{ flexDirection: type ? "row-reverse" : "row" }}
    >
      <div className="formLayout-image">
        <h1 className="animate__animated ">Welcome</h1>
        <h2>{type ? "Login" : "Register"}</h2>
      </div>
      <div className="formLayout-form">{children}</div>
    </section>
  );
};

export default FormLayout;
