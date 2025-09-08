import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href={"/"}
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image
            src="/logo.png"
            alt="LearnFlow"
            title="LearnFlow-logo"
            width={500}
            height={500}
            className="w-[250px] h-[40px] object-cover "
          />
        </Link>
        {children}
        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our <span className="hover:text-primary hover:underline">Terms of service</span>
          and <span>Privacy policy</span>.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
