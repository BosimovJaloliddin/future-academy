import { VideoPlayer, Wrapper } from "./style";
import video from "../../assets/videos/technology.mp4";

const Player = () => {
  return (
    <Wrapper>
      <VideoPlayer controls>
        <source src={video} type="video/mp4" />
        <source src={video} type="video/mp4" />
      </VideoPlayer>
    </Wrapper>
  );
};

export default Player;
