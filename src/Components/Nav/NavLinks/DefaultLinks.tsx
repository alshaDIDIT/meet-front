import {Link} from "react-router-dom";
import {NavLinkStyle} from "../Style/NavLinkStyle";

export function DefaultLinks() {
    return(
        <NavLinkStyle>
            <Link to={'event'}>
                <p>Event</p>
            </Link>
            <Link to={'about'}>
                <p>About</p>
            </Link>
        </NavLinkStyle>
    );
}
