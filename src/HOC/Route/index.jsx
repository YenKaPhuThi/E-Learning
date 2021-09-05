import React from "react";
import { Redirect, Route } from "react-router";
import { TOKEN } from "../../util/settings/config";

const createRoute = (condition) => {
  return class extends React.Component {
    render() {
      const { path, exact, Component, redirectPath } = this.props;
      return (
        <Route
          exact={exact}
          path={path}
          render={(routerProps) => {
            if (condition()) {
              return <Component {...routerProps} />;
            }
            return <Redirect to={redirectPath} />;
          }}
        ></Route>
      );
    }
  };
};

export const AuthRoute = createRoute(() => !localStorage.getItem(TOKEN));
export const PrivateRoute = createRoute(() => localStorage.getItem(TOKEN));
