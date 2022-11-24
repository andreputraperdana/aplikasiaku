import "../App.css";

const buttonStyling = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0",
  border: "none",
  borderRadius: 5,
};

const Button = (props) => {
  return (
    <button style={buttonStyling} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
