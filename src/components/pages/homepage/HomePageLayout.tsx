import Navbar from "../../common/Navbar";
import Banner from "./Banner";
import Contact from "./Contact";
import PersonPage from "./PersonPage";
import Random from "./Random";

const HomePageLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <PersonPage></PersonPage>
      <Contact></Contact>
      <Random></Random>
    </>
  );
};

export default HomePageLayout;
