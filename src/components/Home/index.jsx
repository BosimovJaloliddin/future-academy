import Navbar from "./Navbar";
import Header from "./Header";
import Category from "./Category";
import Player from "../Player";
import Statisticas from "./Statisticas";
import Announcement from "../Announcement";
import Info from "./Info";
import { Box } from "./style.js";
import Comment from "../Comment";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <Player />
      <Statisticas />
      <Box>
        <Announcement />
        <Info />
      </Box>
      <Comment />
    </div>
  );
};

export default Home;
