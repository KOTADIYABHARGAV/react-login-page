import { useEffect, useState } from "react";
import { deleteActiveUser, getActiveUser, IUserModel } from "../LocalStorage";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [activeUser, setActiveUser] = useState<IUserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        const data = getActiveUser();
        if (data === null) {
            navigate("/login");
        }
        setActiveUser(data);
    }, []);
    const handleLogOut = () => {
        deleteActiveUser();
        navigate("/login")
    };
    return (<>
        <div style={{ color: "white" }}>Welcome {activeUser?.name}</div>
        <button onClick={handleLogOut}>LogOut</button>
    </>
    );
}

export default Home;