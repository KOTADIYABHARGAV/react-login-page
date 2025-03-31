import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./component/Login";
import Register from "../src/component/Register";
import Home from './component/Home';
import { getActiveUser } from './LocalStorage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/' element={privateRoute()}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const privateRoute = () => {
  const activeUser = getActiveUser();
  if (activeUser == null) return <Navigate to={"/login"} />;
  return <Outlet />;
}
export default App;
