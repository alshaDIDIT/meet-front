import {useEffect, useState} from "react";
import {IUser} from "../../../Models/IUser";
import {getCurrentUser} from "../../../Services/AuthService";
import {AdminSign} from "./AdminSign";
import {SignIn} from "./SignIn";

export function Sign() {
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        if (getCurrentUser() !== null) setUser(getCurrentUser())
    }, [])

    return(
        user?.roles.includes("ADMIN") ?
            <AdminSign />
            :
            <SignIn />
    );
}
