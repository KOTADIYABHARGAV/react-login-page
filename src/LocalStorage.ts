const REGIATER_USERS = "registred_users";
const ACTIVE_USERS = "active_users";

export interface IUserModel {
    name: string
    username: string
    password: string
}

const AddNewUser = (user: IUserModel) => {
    const UserStr = localStorage.getItem(REGIATER_USERS) || "[]";
    const users = JSON.parse(UserStr) as IUserModel[];
    users.push(user);

    localStorage.setItem(REGIATER_USERS, JSON.stringify(users));
};

const isUserAlreadyRegistred = (username: string): boolean => {
    const UserStr = localStorage.getItem(REGIATER_USERS) || null;
    if (UserStr == null) {
        return false;
    }
    const users = JSON.parse(UserStr) as IUserModel[];
    const findUsers = users.find(x => x.username === username);
    return findUsers != null;
}

const getUser = (username: string, password: string) => {
    const UserStr = localStorage.getItem(REGIATER_USERS) || null;
    if (UserStr == null) return false;

    const users = JSON.parse(UserStr) as IUserModel[];
    const foundUser = users.find(
        (x) => x.username === username && x.password === password
    );
    return foundUser;
}

const updateActiveUser = (user: IUserModel) => {
    localStorage.setItem(ACTIVE_USERS, JSON.stringify(user))

}
const getActiveUser = () => {
    const activeUser = localStorage.getItem(ACTIVE_USERS,) || null;
    if (activeUser === null) return null;
    return JSON.parse(activeUser);
}

const deleteActiveUser = () => {
    localStorage.removeItem(ACTIVE_USERS)
}
export { AddNewUser, isUserAlreadyRegistred, getUser, getActiveUser, updateActiveUser, deleteActiveUser };