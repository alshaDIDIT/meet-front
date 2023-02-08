import {Link} from "react-router-dom";
import {NavLinkStyle} from "../Style/NavLinkStyle";
import {DefaultLinks} from "./DefaultLinks";

export function AdminLinks() {
    return(
        <NavLinkStyle>

            <DefaultLinks />

            <Link to={'admin'}>
                <p>Admin</p>
            </Link>

        </NavLinkStyle>
    );
}
