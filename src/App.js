import React from "react";
import "./assets/css/App.css";
//import "./database.json";
import TitleDescription from "./components/TitleDescription";
import { Container, Typography } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
        <TitleDescription />
      </Container>
    );
  }
}

export default App;
