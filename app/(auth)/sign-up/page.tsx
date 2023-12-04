import { authOptions } from "@/app/utils/auth";
import GithubLoginButton from "@/app/components/GithubLoginButton";
import GoogleLoginButton from "@/app/components/GoogleLoginButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Sign up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333333] placeholder:text-xs placeholder:text-gray400 w-full inline-block"
          />
          <Button
            type="submit"
            variant={"destructive"}
            className="w-full bg-[#E50914]"
          >
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-gray-500 textsm mt-2">
        Already have an account?{" "}
        <Link href="/login" className="text-white hover:underline">
          Sign in
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GoogleLoginButton />
        <GithubLoginButton />
      </div>
    </div>
  );
}
