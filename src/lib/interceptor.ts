import { getSession, signOut } from "@/server-actions/auth/actions";
import axios from "axios";

const interceptor = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});

interceptor.interceptors.request.use(
    async (config) => {
        const session = await getSession();

        config.headers!["Authorization"] = `Bearer ${session?.access_token}`;

        return config;
    },
    async (error) => {
        Promise.reject(error);
    }
);

export default interceptor;
