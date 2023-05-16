import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  const { data } = api.spots.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Blader Unlimited</title>
        <meta name="description" content="A cozy place for bladers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {!user.isSignedIn && <SignInButton />}
        {user.isSignedIn && <UserButton />}
        <div>
          {data?.map((spot) => (
            <div key={spot.id}>{spot.spotName}</div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
