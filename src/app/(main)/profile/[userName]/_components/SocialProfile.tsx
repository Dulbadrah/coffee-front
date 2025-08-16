type SocialProfileProps = {
  url: string;
};

export const SocialProfile = ({ url }: SocialProfileProps) => {
  return (
    <div className=" border-[1] w-full  mt-8 rounded-sm h-[116px]">
      <h2 className="text-lg font-semibold mt-6 ml-6">Social media URL</h2>
      <p className="text-sm ml-6 mb-6">{url}</p>
    </div>
  );
};
