import PropTypes from "prop-types";
import { startTransition } from "react";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};
Header.defaultProps = {
  title: "Nucamp To-Do List",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
