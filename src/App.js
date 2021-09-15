import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyLearning from "./Components/MyLearning/index.jsx";

import UpdateInforUser from "./Components/UpdateInforUser/index.jsx";
import { AuthRoute, PrivateRoute } from "./HOC/Route/index.jsx";

import Home from "./Views/Home";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";
import Search from "./Views/Search";


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
          path="/chinhsuathongtin"
          redirectPath="/signin"
          Component={UpdateInforUser}
        ></PrivateRoute>
        <PrivateRoute
          path="/mylearning"
          Component={MyLearning}
          redirectPath="/signIn"
        ></PrivateRoute>
         <PrivateRoute
          path="/search"
          Component={Search}
          redirectPath="/"
        ></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
