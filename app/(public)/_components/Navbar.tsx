"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import UserDropdown from "./UserDropdown";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Dashboard", href: "/dashboard" },
];

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm border-b border-b-slate-200 dark:bg-[#171717]">
      <div className="flex items-center justify-between h-20 container mx-auto px-4 md:px-6 lg:px-8">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={500}
            height={500}
            className="h-36 w-36 object-contain"
          />
        </Link>

        <nav className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:after:w-full after:content-[''] after:block after:w-0 after:h-0.5 after:bg-slate-900 after:transition-all after:duration-300 dark:text-white dark:hover:text-slate-300 dark:after:bg-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {isPending ? null : session ? (
              <>
              <UserDropdown name={session?.user?.name} email={session?.user?.email} image={session?.user?.image} />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "default" })}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
