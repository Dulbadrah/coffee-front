import { HomeCart } from "./HomeCart";

export const HomeForSection = (moduls: { moduls: any }) => {
  const realModuls = moduls.moduls;

  return (
    <div className="flex flex-col gap-2 border-1 rounded-lg">
      {realModuls?.slice(0, 5).map((modul: { id: any }) => (
        <HomeCart key={modul.id} modul={modul} />
      ))}
    </div>
  );
};
