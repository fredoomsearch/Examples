import { Navigate } from "react-router-dom";
import Prototype from "prop-types";

export const PrivateRoute = ({ children }) => {
    const login = localStorage.getItem("login") === "true";
    return login ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes={
    children:Prototype.node.isRequired
}