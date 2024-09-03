import { auth } from "@/auth";
import HomePage from "@/components/layout/homepage";

export default async function Home() {
  const session = await auth()
  console.log("session: ", session);
  return (
    <div>
      <div>{JSON.stringify(session)}</div>
      <HomePage />
    </div>
  );
}
