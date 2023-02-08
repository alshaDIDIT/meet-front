import {useEffect, useState} from "react";
import {IUser} from "../../../Models/IUser";
import {getCurrentUser} from "../../../Services/AuthService";
import {DefaultLinks} from "./DefaultLinks";
import {AdminLinks} from "./AdminLinks";

export function NavLinks() {
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        if (getCurrentUser() !== null) setUser(getCurrentUser())
    }, [])

    return(
        user?.roles.includes("ADMIN") ?
            <AdminLinks />
            :
            <DefaultLinks />
    );
}
