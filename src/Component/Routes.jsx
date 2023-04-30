import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Category from "./Pages/Share/LeftNav/Category/Category";
import NewsLayout from "./NewsLayout/NewsLayout";
import News from "./News/News";
import Profile from "./Pages/Share/Profile";
import LoginLayout from "./Layout/LoginLayout/LoginLayout";
import Login from "./Pages/Home/Login/Login";
import Register from "./Pages/Home/Login/Register/Register";
import About from "./Pages/Home/Home/About/About";
import Career from "./Pages/Home/Career/Career";
import PrivateRoute from "../assets/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path:"/",
    element: <LoginLayout></LoginLayout>,
    children:[
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "about",
        element:<About></About>
      },
      {
        path: "career",
        element:<Career></Career>
      },
      {
        path: "/profile",
        element:<Profile></Profile>
      }
    ]
  },
    {
      path: "category/",
      element: <Main></Main>,
      children: [
          {
            path:':id',
            element:<Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
          },
      ]
    },
    {
      path:'news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element:<PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
          
        }
      ]
    }
  ]);

  export default router;