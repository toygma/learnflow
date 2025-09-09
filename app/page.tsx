"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const Home = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logout Successfully");
          router.push("/");
        },
      },
    });
  }

  return (
    <div className="text-2xl">
      {!session ? (
        <Button>Login</Button>
      ) : (
        <Button onClick={signOut}>Logout</Button>
      )}
    </div>
  );
};

export default Home;
