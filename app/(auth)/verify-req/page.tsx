"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

const VerifyRequest = () => {
  const [otp, setOtp] = useState("");
  const [emailPending, startEmailTransition] = useTransition();
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") as string;
  const isOtpCompleted = otp.length !== 6;
  function verifyOtp() {
    startEmailTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email verified.");
            router.push(`/`);
          },
          onError: () => {
            toast.error("Internal Server Error");
          },
        },
      });
    });
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please check your email</CardTitle>
        <CardDescription>
          We have sent a verification link to your email address.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center flex-col space-y-2">
          <InputOTP
            value={otp}
            onChange={(value) => setOtp(value)}
            maxLength={6}
            className="gap-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          If you don't see the email, please check your spam folder.
        </div>
        <Button
          disabled={emailPending || isOtpCompleted}
          onClick={verifyOtp}
          className="w-full cursor-pointer"
          variant={"outline"}
        >
          {" "}
          {emailPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <span>Verify Request</span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default VerifyRequest;
