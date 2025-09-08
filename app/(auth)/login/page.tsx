import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon } from "lucide-react";
import React from "react";

const Login = () => {
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
      <CardContent className="flex justify-center">
        <Button 
          className="group relative w-3/4 py-6 text-lg font-medium rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          variant="default"
        >
          <GithubIcon className="size-6 group-hover:scale-110 transition-transform" />
          <span>Login with GitHub</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Login;