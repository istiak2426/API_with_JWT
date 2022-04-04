import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, userInfo } from "../utils/auth";

const adminRoute = ({ children, ...rest }) => {

const { role } = userInfo();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() && role ==="admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default adminRoute;