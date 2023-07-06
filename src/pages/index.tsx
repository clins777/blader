import { type NextPage } from "next";
import { Placeholder } from "~/components/Placeholder";
import { SpotList } from "~/components/SpotList";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading } = api.spots.getAll.useQuery();

  if (isLoading) return <Placeholder message={"Loading spots ⏳"} />;

  if (!data) return <Placeholder message={"No spots yet 😭"} />;

  return (
    <main>
      <div className="navbar">
        <a className="br-2" href="/">
          Home
        </a>
        <a className="br-2" href="/newspot">
          New Spot
        </a>
      </div>
      <SpotList spots={data} />
    </main>
  );
};

export default Home;
