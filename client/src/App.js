import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom"
import Register from "./Pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './Pages/Home';
import Single from './Pages/Single';
import Login from './Pages/Login';
import Write from './Pages/Write';


const Layout = ()=>{
  return(
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/post/:id",
        element:<Single/>,
      },
      {
  
        path:"/write",
        element:<Write/>,
      },
     
    ]
  },

  {
  
    path:"/register",
    element:<Register/>,
  },
  {
  
    path:"/login",
    element:<Login/>,
  },
  



]);


function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
