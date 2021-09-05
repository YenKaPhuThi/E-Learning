import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListCourseSignIn from "./Components/ListCourseSignIn.jsx";
import { AuthRoute, PrivateRoute } from "./HOC/Route/index.jsx";

import Home from "./Views/Home";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <AuthRoute
          path="/signin"
          redirectPath="/"
          Component={Signin}
        ></AuthRoute>
        <AuthRoute
          path="/signup"
          redirectPath="/"
          Component={Signup}
        ></AuthRoute>
        <PrivateRoute
          path="/danhsachKHdangki"
          redirectPath="/signin"
          Component={ListCourseSignIn}
        ></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
