import Navbar from "./Navbar";
import Header from "./Header";
import Category from "./Category";
import Player from "../Player";
import Statisticas from "./Statisticas";
import "./style.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <Player />
      <Statisticas />
    </div>
  );
};

export default Home;
