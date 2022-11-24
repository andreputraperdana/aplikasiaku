import "../App.css";

const Skills = (props) => {
  const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>);
  return <ul>{skillList}</ul>;
};

export default Skills;
