import { UserButton, useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import { type NextPage } from "next";
import { redirect } from "next/navigation";
import AddSpotModal from "~/components/AddSpotModal";
import { Placeholder } from "~/components/Placeholder";
import { SpotList } from "~/components/SpotList";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { isSignedIn } = useUser();
  const { data, isLoading } = api.spots.getAll.useQuery();

  if (isLoading) return <Placeholder message={"Loading spots ⏳"} />;

  if (!data) return <Placeholder message={"No spots yet 😭"} />;

  return (
    <main>
      <div className="flex flex-row justify-between bg-purple-100 px-6 py-2 text-xl">
        <a className="group flex items-center gap-2" href="/">
          <img
            className="h-10 w-10 animate-spin rounded-full border-2 border-purple-600 md:animate-none md:group-hover:animate-spin"
            src="/favicon.ico"
          />
          <span>Blade Spots</span>
        </a>
        {isSignedIn ? (
          <div className="flex">
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "h-10 w-10 border-2 border-purple-600 md:hover:animate-spin",
                },
              }}
            />
          </div>
        ) : (
          <div className="flex">
            <SignInButton />
          </div>
        )}
      </div>
      <SpotList spots={data} />
      <AddSpotModal isSignedIn={!!isSignedIn} />
    </main>
  );
};

export default Home;
