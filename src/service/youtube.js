class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_APP_KEY}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=25&key=${process.env.REACT_APP_APP_KEY}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => {
      return {
        ...item,
        id: item.id.videoId,
      };
    });
  }
}

export default Youtube;
