class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?q=bts&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBYPS3vYonoWeIkqtq2LOMAibPKsnH2rEI`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?q=bts&part=snippet&maxResults=25",
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }
}

export default Youtube;
