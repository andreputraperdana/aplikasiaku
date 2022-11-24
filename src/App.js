import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Button from "./components/button";
import HexaColor from "./components/hexacolor";
import Age from "./components/age";
import Weight from "./components/weight";
import Status from "./components/status";
import Skills from "./components/skills";
const App = () => {
  const welcome = "Welcome to 30 Days Of React";
  const title = "Getting Started React";
  const subtitle = "JavaScript Library";
  const firstName = "Asabeneh";
  const lastName = "Yetayeh";
  const date = "Oct 4, 2020";
  let currentYear = 2020;
  let birthYear = 2015;
  const age = currentYear - birthYear;
  let status = age >= 18;
  const gravity = 9.81;
  const mass = 75;
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asebeneh",
      lastName: "Yetayeh",
    },
    date: new Date(),
  };

  return (
    <div className="app">
      <Header data={data} />
      <Main />
      <Age age={age} />
      <Weight weight={gravity * mass} />
      <Status status={status} />
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
      <Button text="Say Hi" onClick={() => alert("Halo")} />
      <HexaColor />
      <Footer />
    </div>
  );
};

export default App;
