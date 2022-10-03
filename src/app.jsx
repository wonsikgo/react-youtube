import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState([]);

  const onSearch = (keyword) => {
    console.log(keyword);
    youtube
      .search(keyword)
      .then((videos) => {
        console.log(videos);
        setVideos(videos);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then((videos) => {
        setVideos(videos);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
