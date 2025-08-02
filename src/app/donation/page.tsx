"use client";

import { BuySomeoneCoffee } from "./components/BuySomeoneCoffee";
import CoverImage from "./components/CoverImage";
import ProfileCard from "./components/ProfileCard";
// import { BuySomeoneCoffee } from "../components/BuySomeoneCoffee";

const DonationPage = () => {
  // const search = useSearchParams();
  // const name = useSearchParams().get("name");

  //  const [filterMovie, setFilterMovie] = useState<MoviesResponse>();

  //  useEffect(() => {
  //    if (!genreId) return;
  //    const getFilter = async () => {
  //      const data = await getGenreFilter(genreId, page);
  //      console.log("genre", data);

  //      setFilterMovie(data);
  //    };
  //    getFilter();
  //  }, [genreId, page]);
  // jaja

  return (
    <div className=" min-h-screen px-4">
      <CoverImage />
      <div className="max-w-5xl mx-auto -mt-16 relative z-10 p-4 grid md:grid-cols-2 gap-6">
        <ProfileCard />
        <BuySomeoneCoffee />
      </div>
    </div>
  );
};
export default DonationPage;
