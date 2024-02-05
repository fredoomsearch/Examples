import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser debe de estar dentro del provedor");
    }

    return context;
}