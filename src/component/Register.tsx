import React, { useState } from "react";
import { AddNewUser, isUserAlreadyRegistred, IUserModel } from "../LocalStorage";
import { Link } from "react-router-dom";

const Register = () => {
    const [data, setData] = useState<IUserModel>({ name: "", username: "", password: "" });
    const [message, setMessage] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;
        const value = event.target.value;

        setData({ ...data, [id]: value });
        setMessage("")
    }
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (data.name === "" || data.username === "" || data.password === "") {
            setMessage("Please Fill the Form.")
            return;
        }
        if (isUserAlreadyRegistred(data.username)) {
            setMessage("User has already registered.");
            return;
        }
        AddNewUser(data);
        setMessage("User created. Clicked On")
        setData({
            name: "",
            username: "",
            password: "",

        });
    }

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleFormSubmit}>
                <h3>Register Here</h3>
                <label>Name</label>
                <input type="text" placeholder="Name" id="name" value={data.name} onChange={handleInputChange} />

                <label>Email Id</label>
                <input type="email" placeholder="Email Id" id="username" value={data.username} onChange={handleInputChange} />

                <label>Password</label>
                <input type="password" placeholder="Password" id="password" value={data.password} onChange={handleInputChange} />

                <button>Register</button>
                <div className="social">
                    {message && <p>{message}</p>}
                    <Link to="/login">Log in</Link>
                </div>
            </form>
        </>
    );
};

export default Register;
