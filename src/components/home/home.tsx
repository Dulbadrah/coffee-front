import { HomeOneSection } from "./homeOneSection";
import { HomeTwoSection } from "./homeTwoSection";

export const Home = () => {
  return (
    // default
    <div>
      <HomeOneSection />
      <HomeTwoSection />
      <div>
        <div>Recent transactions</div>
        <div></div>
      </div>
    </div>
  );
};
