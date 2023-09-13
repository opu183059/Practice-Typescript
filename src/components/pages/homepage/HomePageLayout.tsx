import Navbar from "../../common/Navbar";
import Banner from "./Banner";
import PersonPage from "./PersonPage";

const HomePageLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <PersonPage></PersonPage>
    </>
  );
};

export default HomePageLayout;
