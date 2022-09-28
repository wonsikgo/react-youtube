import React, { useState } from "react";
import styles from "./video_search.module.css";

const VideoSearch = () => {
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!keyword) return;
    // console.log(keyword);
    console.log(this.props);
    // this.props.onSearch(keyword);
  };

  return (
    <header className={styles.header}>
      <img
        className={styles.logo_image}
        src="/images/logo.png"
        alt="logo_image"
      />
      <h1 className={styles.title}>Youtube</h1>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search.."
        value={keyword}
        onChange={handleKeywordChange}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.button} onClick={handleSearch}>
        <img
          className={styles.button_image}
          src="/images/search.png"
          alt="search_icon"
        />
      </button>
    </header>
  );
};

export default VideoSearch;
