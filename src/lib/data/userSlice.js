import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

let storedUserData = Cookies.get("userData");
let initialState = storedUserData ? JSON.parse(storedUserData) : null;

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            Cookies.set("userData", JSON.stringify(action.payload), {
                expires: 30,
            });
            return action.payload;
        },
        userLogout: (state) => {
            Cookies.remove("userData");
            return null;
        },
        setUserDetails: (state, action) => {
            return action.payload;
        },
    },
});

export const { userLogin, userLogout, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
