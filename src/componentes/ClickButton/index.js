import "./Button.css";

const ClickButton = (props) => {
  return <button className="click-button">{props.children}</button>;
};
export default ClickButton;
