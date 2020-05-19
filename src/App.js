import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import ResumePage from "./Components/Resume";
import Projects from "./Components/Projects";

function App() {
  return (
      <div className={"App"}>
      <BrowserRouter>
          <NavBar/>
          <Route exact path={"/"} component={Landing}/>
          <Route exact path={"/Resume"} component={ResumePage}/>
          <Route exact path={"/Projects"} component={Projects}/>
      </BrowserRouter>
      </div>
  );
}

export default App;
