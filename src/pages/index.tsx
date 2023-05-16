import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const CreateSpotWizard = () => {
  const { user } = useUser();
  if (!user) return null;
  return (
    <div className="flex">
      <img
        src={user.profileImageUrl}
        alt="Profile image"
        className="h-14 w-14 rounded-full"
      />
    </div>
  );
};

const Home: NextPage = () => {
  const user = useUser();
  const { data, isLoading } = api.spots.getAll.useQuery();

  if (isLoading) return <div>Loading spots ⏳</div>;

  if (!data) return <div>No spots yet 😭</div>;

  return (
    <>
      <Head>
        <title>Blader Unlimited</title>
        <meta name="description" content="A cozy place for bladers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            {!user.isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />
              </div>
            )}
            {/* {user.isSignedIn && (
              <div className="flex justify-center">
                <UserButton />
              </div>
            )} */}
            {user.isSignedIn && <CreateSpotWizard />}
          </div>
          <div className="flex flex-col">
            {data.map((spot) => (
              <div key={spot.id} className="border-b border-slate-400 p-8">
                {spot.spotName}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
