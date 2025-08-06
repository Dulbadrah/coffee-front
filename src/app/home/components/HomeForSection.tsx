import { HomeCart } from "./HomeCart";

export const HomeForSection = ({ moduls }: any) => {
  console.log(moduls);
  return (
    <div className="flex flex-col gap-2 border-1 rounded-lg">
      {/* {moduls?.slice(0, 5)?.map(({ modul }: any) => (
        <HomeCart key={modul} modul={modul} /> */}
      {/* ))} */}
    </div>
  );
};
