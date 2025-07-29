export const HomeCart = ({ modul }: any) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div>
            <img src={"image"} className="w-[40px] h-[40px]"></img>
          </div>
          <div>
            <div>{modul.id}</div>
            <div>{modul.name}</div>
          </div>
        </div>
        <div>
          <div>{modul.mount}</div>
          <div>{modul.date}</div>
        </div>
      </div>
      <div className="max-w-[650]">
        comment: nisdkncmolkdsn osd90 son wopvs nosn osn lxm0wjvwe9 b8wb 8
      </div>
    </div>
  );
};
