import axios from "axios";

export async function login(email: string, password: string) {
    const response = await axios
        .post(
            process.env.REACT_APP_BASE_URL + "/api/auth/login", {
                email,
                password
            });
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

export function getCurrentUser() {
    const currentUser = localStorage.getItem('user');
    const user = currentUser ? JSON.parse(currentUser) : null;
    return user;
}

export function logout() {
    localStorage.removeItem("user");
}


