//Task 1
//updating dybamically using props
import PropTypes from "prop-types";
function PropsTask(props) {
  const cardStyle = {
    backgroundColor: props.customcolor,
    padding: "1em",
    borderRadius: "8px",
    color: "#fff",
  };

  return (
    <>
      <h1>Task 1 Using Props</h1>
      <div className="card" style={cardStyle}>
        <h4>Name: {props.name}</h4>
        <h4>Email: {props.email}</h4>
        <h4>Age: {props.age}</h4>
      </div>
    </>
  );
}

PropsTask.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number,
  customcolor: PropTypes.string,
};

function Test() {
  return (
    <div>
      <PropsTask
        name="Eyuel"
        email="ey.mazi233@gmail.com"
        age={21}
        customcolor="#e94320"
      />
    </div>
  );
}

export default Test;
