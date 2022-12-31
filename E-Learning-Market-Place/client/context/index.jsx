import { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const initialState = {
    user: null
}

const Context = createContext();
const router = useRouter();

const rootReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    useEffect(() => {
        dispatch({
            type: "LOGIN",
            payload: JSON.parse(window.localStorage.getItem("user"))
        })
    }, [])

    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            const res = error.response;
            if (res.status === "401" && res.config() && !res.config.__isRetryRequest) {
                return new Promise((resolve, reject) => {
                    axios.get('/api/logout')
                        .then((data) => {
                            console.log("/401 Error > logout.");
                            dispatch({ type: "LOGOUT" });
                            window.localStorage.removeItem("user");
                            router.push();
                        })
                        .catch((err) => {
                            console.log("AXIOS INTERCEPTOR ERR", err);
                            reject(err);
                        })
                })
            }
        }
    )

    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    );
};

export { Context, Provider };