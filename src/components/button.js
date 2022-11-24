import "../App.css";
import Button from "@mui/material/Button";

const Tombol = (props) => {
  return (
    <Button variant="contained" color="success" onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

export default Tombol;
