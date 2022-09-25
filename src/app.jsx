import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBYPS3vYonoWeIkqtq2LOMAibPKsnH2rEI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <h1>
      <VideoList videos={videos} />
    </h1>
  );
}

export default App;
