import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="text-2xl">
      {session ? `Welcome ${session.user.name}` : "You are not logged in"}
    </div>
  );
};

export default Home;
