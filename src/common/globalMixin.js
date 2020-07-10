let backgroundUrl = [
  {
    id: 2,
    url:
      "https://api.platinumseed.com/wp-content/uploads/2018/03/slide1-kok.jpg",
    div: "slide-2"
  },
  {
    id: 3,
    url:
      "https://api.platinumseed.com/wp-content/uploads/2016/02/home-glen-fiddich.jpg",
    div: "slide-3"
  },
  {
    id: 4,
    url: "https://api.platinumseed.com/wp-content/uploads/2016/02/home-rtd.jpg",
    div: "slide-4"
  }
];

function getBackgroundUrl(id) {
  let background = backgroundUrl.find(item => item.id === id);
  return background ? background : "";
}

export default {
  getBackgroundUrl
};
