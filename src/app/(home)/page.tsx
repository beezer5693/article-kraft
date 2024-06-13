import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-medium">Article Kraft</h1>
      <p>
        Enhance your article&apos;s readability and SEO by using our AI-powered
        article enhancer.
      </p>
      <div className="mt-5 flex items-center gap-3">
        <Link href="/signup">
          <Button>Sign up</Button>
        </Link>
        <Link href="/login">
          <Button variant={"secondary"}>Log in</Button>
        </Link>
      </div>
    </main>
  );
}
