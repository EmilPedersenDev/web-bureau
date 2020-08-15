const backgroundUrl = [
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

const russianBearProducts = [
  {
    id: 1,
    header: "WEBSITE DEVELOPMENT",
    infoText: "Russian Bear`s Responsive Platform",
    img:
      "https://api.platinumseed.com/wp-content/uploads/2017/08/Work_RussianBear_1.jpg"
  },
  {
    id: 2,
    header: "VOLUME DRIVER",
    infoText:
      " Using barcode redemption as an entry mechanic, users were able to enter to win a recording session.",
    img:
      "https://api.platinumseed.com/wp-content/uploads/2017/08/Work_RussianBear_2.jpg"
  },
  {
    id: 3,
    header: "ROVING STUDIO",
    infoText:
      "A mobile recording studio travelled the country, and could be tracked online.",
    img:
      "https://api.platinumseed.com/wp-content/uploads/2017/08/Work_RussianBear_4.jpg"
  }
];

const glenfiddichProducts = [
  {
    id: 1,
    header: "BRAND PLATFORM",
    infoText:
      "Users were able to request an invitation to the Independent Bar on our brand platform.",
    img:
      "https://api.platinumseed.com/wp-content/uploads/2017/08/Work_Glenfiddich_1.jpg"
  },
  {
    id: 2,
    header: "APP DEVELOPMENT",
    infoText:
      "We built a bespoke app for the bar itself, capturing each customer’s biometric data to create a personalized cocktail.",
    img:
      "https://api.platinumseed.com/wp-content/uploads/2017/08/Work_Glenfiddich_2.jpg"
  },
  {
    id: 3,
    header: "PERSONALISED COCKTAILS",
    infoText:
      "Customers received links to their voice visualization via SMS, allowing them to share their unique analytics on social media.",
    img:
      "https://api.platinumseed.com/wp-content/uploads/2017/08/Work_Glenfiddich_3.jpg"
  }
];

function getBackgroundUrl(id) {
  let background = backgroundUrl.find(item => item.id === id);
  return background ? background : "";
}

export default {
  getBackgroundUrl,
  russianBearProducts,
  glenfiddichProducts
};
