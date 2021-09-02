import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Views/Home";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
