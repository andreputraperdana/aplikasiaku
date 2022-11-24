import "../App.css";
import andreImage from "../images/Andre.JPG";

const alt = "Andre Image";
const styleImage = {
  height: "257px",
  width: "193px",
};

const UserCard = () => {
  return (
    <div>
      <img src={andreImage} alt={alt} style={styleImage} />
      <h2>Andre Putra</h2>
    </div>
  );
};

const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

function Main() {
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js</p>
        <ul>
          <TechList />
        </ul>
        <UserCard />
      </div>
    </main>
  );
}

export default Main;
