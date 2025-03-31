import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, updateActiveUser } from "../LocalStorage";

interface ILoginModel {
    username: string;
    password: string;
}
function Login() {
    const [data, setData] = useState<ILoginModel>({ username: "", password: "" });
    const navigate = useNavigate();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;
        const value = event.target.value;

        setData({ ...data, [id]: value });
    };
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (data.username === "" || data.password === "") {
            alert("Please Fill the Form.")
            return;
        }

        const user = getUser(data.username, data.password);
        if (user == null || user === false) {
            alert("Username or Password is incorrect");
            return;
        }
        updateActiveUser(user);
        navigate("/");
    }
    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleFormSubmit}>
                <h3>Login Here</h3>

                <label>Email Id</label>
                <input type="email" placeholder="Email Id" id="username" value={data.username} onChange={handleInputChange} />

                <label>Password</label>
                <input type="password" placeholder="Password" id="password" value={data.password} onChange={handleInputChange} />

                <button>Log In</button>
                <div className="social">
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    );
};
export default Login;
