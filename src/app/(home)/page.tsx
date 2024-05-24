import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-3xl font-medium">Article Kraft</h1>
            <p>Enhance your article's readability and SEO by using our AI-powered tool.</p>
            <div className="flex items-center gap-3 mt-5">
                <Link href="/auth/signup">
                    <Button>Sign up</Button>
                </Link>
                <Link href="/auth/login">
                    <Button variant={"secondary"}>Sign in</Button>
                </Link>
            </div>
        </main>
    );
}
