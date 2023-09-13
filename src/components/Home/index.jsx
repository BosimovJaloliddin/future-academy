import Header from "./Header";
import HomeCategory from "./HomeCategory";
import Player from "../Player";
import Statisticas from "./Statisticas";
import Announcement from "../Announcement";
import Info from "./Info";
import { Box } from "./style.js";
import Comment from "../Comment";
import CourseInfo from "./CourseInfo";
import LeaveAplication from "../LeaveAplication";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HomeCategory />
      <Player />
      <Statisticas />
      <Box>
        <Announcement />
        <Info />
      </Box>
      <Comment />
      <CourseInfo />
      <LeaveAplication />
      <Footer />
    </>
  );
};

export default Home;
