import Navbar from "./Navbar";
import Header from "./Header";
import Category from "./Category";
import "./style.js";
import Player from "../Player";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <Player />
    </div>
  );
};

export default Home;
