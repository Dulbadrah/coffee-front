import { Donation } from "@/lib/types";

 type HomeCart = { 
  donation:Donation
}

export const HomeCartCaruseil = ({donation}:HomeCart) => {
  // console.log("donate",donation);
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div>
            <img
              src={"https://i.pravatar.cc/100"}
              className="w-[40px] h-[40px] rounded-full mx-auto border-4 object-cover"
            ></img>
          </div>
          <div>
            <div>{donation.donor.username}</div>
            <div>{donation.donor.email}</div>
          </div>
        </div>
        <div>
          <div>{donation.amount}</div>
          <div>{donation.donor.createdAt}</div>
        </div>
      </div>
      <div className="max-w-[650]">
       comment: {donation.specialMessage}
      </div>
    </div>
  );
};
