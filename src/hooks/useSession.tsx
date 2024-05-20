import interceptor from "@/lib/interceptor";
import { signOut } from "@/server-actions/auth/actions";
import { useEffect, useState } from "react";

export const useSession = () => {
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        getSession();
    }, []);

    const getSession = async () => {
        try {
            const session = await interceptor
                .get("/api/auth/session")
                .then((response) => response.data);

            if (session) {
                setSession(session);
            }
        } catch (error) {
            await signOut();
        }
    };

    return { session, getSession };
};
