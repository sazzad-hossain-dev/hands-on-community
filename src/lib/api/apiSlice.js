import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogout } from "../data/auth/userSlice";
const URL = process.env.URL;

const baseQuery = fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user?.data?.token?.access_token;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        api.dispatch(userLogout());
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    tagTypes: [],
    endpoints: (builder) => ({}),
});

export const {} = apiSlice;
