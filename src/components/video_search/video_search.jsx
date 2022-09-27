import React from "react";

const VideoSearch = () => {
  // const [keyword, setKeyword] = useState([]);

  return (
    <nav>
      <div>
        <img src="../../../public/images/logo.png" alt="logo_image" />
        <span>Youtube</span>
      </div>
      <div>
        <input type="text" placeholder="Search.." />
        <img src="../../../public/images/search.png" alt="search_icon" />
      </div>
    </nav>
  );
};

export default VideoSearch;
