"use client"
import { useTransition } from "react";
import { GithubIcon, Loader } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
const LoginForm = () => {
      const [githubPending, startGithubTransition] = useTransition();

  async function signInWithGitHub() {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with github, you will be redirected...");
          },
          onError: () => {
            toast.error("Internal Server Error");
          },
        },
      });
    });
  }
  return (
     <Card className="w-full max-w-md mx-auto border-none shadow-lg rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-indigo-800">
          Sign In
        </CardTitle>
        <p className="text-sm text-gray-600 mt-1">
          Connect using your GitHub account
        </p>
      </CardHeader>
      <CardContent className="flex flex-col  gap-4">
        <Button
          disabled={githubPending}
          onClick={signInWithGitHub}
          className="group relative py-6 text-lg font-medium rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer "
          variant="default"
        >
          {githubPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <GithubIcon className="size-6 group-hover:scale-110 transition-transform" />
              <span>Login with GitHub</span>
            </>
          )}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-black/10 after:dark:border-white/10">
          <span className="relative z-10 bg-gradient-to-br from-indigo-50 to-purple-100 px-2">
            Or continue with
          </span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="m@example.com" />
            <Button
              variant={"outline"}
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer hover:text-white"
            >
              Continue with email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoginForm