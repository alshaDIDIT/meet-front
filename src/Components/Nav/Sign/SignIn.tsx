import {SignStyle} from "../Style/SignStyle";
import {SignInputStyle} from "../Style/SignInputStyle";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {login} from "../../../Services/AuthService";
import {NavButton} from "../Style/NavButton";

export function SignIn() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    let navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        login(email, password)
            .then(() => {
                // navigate("/");
                window.location.reload();
            })
            .catch(error => alert(error))
    }

    return (
        <SignInputStyle>
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <h1>Sign in</h1>
                <h1 style={{
                    fontSize: "2rem"
                }}>X</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{
                    marginTop: "1rem"
                }}>
                    <input type="text"
                           placeholder="Email"
                           name="Username"
                           id="Username"
                           onChange={(e => setEmail(e.target.value))} value={email}
                    />
                    <input type="password"
                           placeholder="Password"
                           name="Password"
                           onChange={(e => setPassword(e.target.value))} value={password}
                    />
                </div>
                <NavButton type="submit">
                    Submit
                </NavButton>
            </form>
            <div style={{
                marginTop: "1rem",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.5'
            }}>
                Not a member?
                <Link to='signup'
                      style={{fontSize: "1.65rem"}}
                >Sign up</Link>
            </div>
        </SignInputStyle>
    );
}
