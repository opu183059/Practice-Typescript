import Navbar from "../../common/Navbar";
import Banner from "./Banner";
import Contact from "./Contact";
import PersonPage from "./PersonPage";

const HomePageLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <PersonPage></PersonPage>
      <Contact></Contact>
    </>
  );
};

export default HomePageLayout;
