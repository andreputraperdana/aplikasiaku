import "../App.css";

const Status = (props) => {
  console.log(props);
  let status = props.status ? "Old enough to drive" : "Too young to driving";
  return <p>{status}</p>;
};

export default Status;
