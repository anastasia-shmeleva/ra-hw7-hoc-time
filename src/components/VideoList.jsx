import shortid from "shortid";
import Video from "./Video";

const VideoList = (props) => {
  return props.list.map(item => <Video key={shortid.generate()} url={item.url} date={item.date} />);
}

export default VideoList;