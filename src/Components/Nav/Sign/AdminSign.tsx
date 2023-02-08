import {NavButton} from "../Style/NavButton";
import {login, logout} from "../../../Services/AuthService";

export function AdminSign() {

    const handleClick = async (event: any) => {
        event.preventDefault();
        logout();
        window.location.reload();
    }

    return(
        <div>
            <h1>admin logged in</h1>
            <NavButton onClick={handleClick}>
                Logout
            </NavButton>
        </div>
    );
}
