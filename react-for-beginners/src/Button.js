import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  // button 은 무작위적인 class 명을 가짐
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// App.js 에서 Button 을 가져올 수 있게
export default Button;
