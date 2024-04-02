import { Button } from "@/components/ui/button";
import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";
import { Dashboard } from "@/components/ui/dashboard";


export default async function Home() {
  const userAuth = await getUserAuth();
  return (
    
    <main >
      <Dashboard/>

    </main>
  );
}
