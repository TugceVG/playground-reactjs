import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

// user:null we did this for test
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    // user: {
    //     _id: "646e2f85f59969e2b0722899",
    //     username: "Jane",
    //     email: "jane@gmail.com",
    //     password: "$2b$10$uLAWmTaW.gd8zZai2UWYUOt5Z/1O9N14/HwGQezSit7M4mqNwkIeO",
    //     profilePicture: "/person/4.jpeg",
    //     coverPicture: "",
    //     followers: [],
    //     followings: ["646e2e91f59969e2b0722897"],
    //     isAdmin: false
    // },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}