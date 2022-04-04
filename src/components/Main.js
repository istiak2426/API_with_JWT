import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../route/PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Private from "./Private";
import Public from "./Public";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/posts/public" exact component={Public} />

        <PrivateRoute exact path="/posts/private">
          <Private />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Main;
