class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const params = {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 25,
    };
    const { data } = await this.youtube.get("/videos", { params });

    return data.items;
  }

  async search(query) {
    const params = {
      part: "snippet",
      maxResults: 25,
      type: "video",
      q: query,
    };
    const { data } = await this.youtube.get("/search", { params });

    return data.items.map((item) => {
      return {
        ...item,
        id: item.id.videoId,
      };
    });
  }
}

export default Youtube;
