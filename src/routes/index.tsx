import { Route, Navigate, Routes as Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import useAuth from "../hooks/useAuth";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardManager from "../pages/DashboardManager";

function Routes() {
    const {user} = useAuth();

    const redirectPath = () => {
        if (user?.userDecoded.roles === "Admin") {
          return <DashboardAdmin/>
        }
        else if (user?.userDecoded.roles === "Manager") {
          return <DashboardManager/>
        }
        else if (user?.token) {
          return <Dashboard/>
        }
        else {
          return <Navigate to="/" replace/>
        }

      }
    
    return(
      <Switch>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard-manager" element={redirectPath()} />
        <Route path="/dashboard-admin" element={redirectPath()} />
        <Route path="/dashboard" element={redirectPath()} />
      </Switch>
    )
  }
  
  export default Routes
  