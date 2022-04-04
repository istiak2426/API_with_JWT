import { Link, withRouter } from "react-router-dom";
import { signOut, isAuthenticated } from "../utils/auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "grey" };
  }
};

const Menu = ({ history }) => {


  
  
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/posts/public")} to="/posts/public">
            Public route
          </Link>
        </li>

        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/login")}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/register")}
                to="/register"
              >
                Register
              </Link>
            </li>
          </>
        )}

        {isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, `/posts/private`)}
                to={`/posts/private`}
              >
                Private route
              </Link>
            </li>




            <li className="nav-item">
              <span
                className="nav-link"
                style={{ cursor: "pointer", color: "grey" }}
                onClick={() => {
                  signOut(() => {
                    history.push("/login");
                  });
                }}
              >
                {" "}
                Log Out
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default withRouter(Menu);
