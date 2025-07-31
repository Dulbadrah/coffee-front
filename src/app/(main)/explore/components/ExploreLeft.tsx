import { ExploreCreatorList } from "./ExploreCreatorList";
import { ExploreMain } from "./ExploreMain";

export const ExploreLeft = () => {
  const content = {
    title: "About Space ranger",
    text: `All day, every day, we're watching, listening to, reading and
    absorbing politics. It's exhausting. We then report on what we've seen
    in a way that's as chill as possible. None of the sensationalism and
    division you'll find elsewhere. It's about clarity, focus,
    approachability, and having a little wry smile almost all the time.`,
  };

  const section = {
    title: "Social media URL",
    text: "https://buymeacoffee.com/baconpancakes1",
  };

  const items = Array(4).fill({ content, section });
type Creator = {
  title: string;
  text: string;
};
  const dummyCreators:Creator[]=[]

  return (
    <div className="flex flex-col gap-10 text-black mt-6">
      {items.map((all, index) => (
        <div key={index} className="flex flex-col gap-4">
                  <ExploreCreatorList creators={dummyCreators} />
          {/* Дээшээ ExploreMain */}
          <ExploreMain />

          <div className="grid grid-cols-2 gap-8">
            {/* content */}
            <div>
              <h2 className="text-lg font-semibold">{all.content.title}</h2>
              <p className="text-sm">{all.content.text}</p>
            </div>
            {/* section */}
            <div>
              <h2 className="text-lg font-semibold">{all.section.title}</h2>
              <p className="text-sm">{all.section.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};