import {Outlet} from "react-router-dom";
import {Nav} from "../../Components/Nav/Main/Nav";

export function Layout() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    );
}
