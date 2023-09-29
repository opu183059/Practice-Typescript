import Navbar from "../../common/Navbar";
import AddPerson from "./AddPerson";
import Banner from "./Banner";
import Contact from "./Contact";
import PersonPage from "./PersonPage";
import Random from "./Random";
import TodoPage from "./TodoPage";

const HomePageLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <PersonPage></PersonPage>
      <Random></Random>
      <TodoPage></TodoPage>
      <AddPerson></AddPerson>
      <Contact></Contact>
    </>
  );
};

export default HomePageLayout;
