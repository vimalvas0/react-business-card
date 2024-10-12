import "./Card.css";
import propTypes from "prop-types";

export default function Card({ children }) {
  return <div className="card">{children}</div>;
}

Card.propTypes = {
  children: propTypes.node.isRequired,
};
