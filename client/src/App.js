import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import Register from "./Pages/Register"


const router = createBrowserRouter([
  {
    path:"/",
    element:<div>Home</div>,
    
    path:"/register",
    element:<Register/>,
  }
])

    
 



function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <RouterProvider router={router}/>

    </div>
  );
}

export default App;
