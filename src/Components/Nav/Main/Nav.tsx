import {useEffect, useState} from "react";
import {getCurrentUser} from "../../../Services/AuthService";
import {IUser} from "../../../Models/IUser";
import {Link} from "react-router-dom";
import {LoginStyle} from "../Style/LoginStyle";
import {NavStyle} from "../Style/NavStyle";
import {NavLinks} from "../NavLinks/NavLinks";
import {SignStyle} from "../Style/SignStyle";
import {Sign} from "../Sign/Sign";

const effect = ' .25s linear forwards';

export function Nav() {
    const [user, setUser] = useState<IUser>();
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        if (getCurrentUser() !== null) setUser(getCurrentUser())
    }, [])

    function handleClick() {
        (clicked) ? setClicked(false) : setClicked(true);
    }

    return (
        <>
            <NavStyle>
                <Link to={'/'}>
                    <h1>Meet</h1>
                </Link>

                <NavLinks />

                <LoginStyle onClick={handleClick}>
                    {user?.roles.includes("ADMIN") ? user?.email : <h1 style={{
                        fontSize: "2.5rem"
                    }}>Login</h1>}
                </LoginStyle>
            </NavStyle>

            <SignStyle
                style={{
                    animation: (clicked) ? 'open' + effect : 'close' + effect,
            }}
            >
                <Sign />
            </SignStyle>
        </>
    );
}
