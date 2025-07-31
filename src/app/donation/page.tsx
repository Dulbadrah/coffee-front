"use client";

import { BuySomeoneCoffee } from "./components/BuySomeoneCoffee";
import CoverImage from "./components/CoverImage";
// import { BuySomeoneCoffee } from "../components/BuySomeoneCoffee";
import ProfileCard from "./components/ProfileCard";

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

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <CoverImage />
      <div className="max-w-5xl mx-auto -mt-16 relative z-10 p-4 grid md:grid-cols-2 gap-6">
        <ProfileCard />
        <BuySomeoneCoffee />
      </div>
    </div>
  );
};
export default DonationPage;
