import Home from "./screens/Home";
import Error from "./screens/Error";
import Login from "./screens/Login";
import Todo from "./screens/Todo";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import Search from "./screens/Search";

const routes = [
  {
    path: "/login",
    element: <Login />,
    protected: false,
  },
  {
    path: "/register",
    element: <SignUp />,
    protected: false,
  },
  {
    path: "/todos",
    element: <Todo />,
    protected: true,
  },
  {
    path: "/profile",
    element: <Profile />,
    protected: true,
  },
  {
    path: "/search",
    element: <Search />,
    protected: true,
  },
];

export { routes };
