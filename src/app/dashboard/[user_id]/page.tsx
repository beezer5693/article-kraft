"use client";

import { useSession } from "@/hooks/useSession";

const Dashboard = () => {
    const { session } = useSession();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {session && session.data.user.email}
        </div>
    );
};

export default Dashboard;
