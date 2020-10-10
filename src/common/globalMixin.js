import * as productData from "./productData";

const backgroundUrl = productData.backgroundUrl;
const russianBearProducts = productData.russianBearProducts;
const glenfiddichProducts = productData.glenfiddichProducts;
const rockingTheDaisiesProducts = productData.rockingTheDaisiesProducts;
const mountVernonProducts = productData.mountVernonProducts;
const allWork = productData.allWork;

function getBackgroundUrl(id) {
  let background = backgroundUrl.find((item) => item.id === id);
  return background ? background : "";
}

function getProductBackgroundById(id) {
  let product = backgroundUrl.find((item) => item.id === id);
  return product;
}

function getExampleWork(id) {
  let exampleWork = allWork.find((item) => item.id === id);
  return exampleWork;
}

function imageOnLoad(backgroundDiv, backgroundUrl) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = () => {
      resolve(
        (backgroundDiv.style.backgroundImage = "url('" + backgroundUrl + "')")
      );
    };
    image.src = backgroundUrl;
  });
}

export default {
  getBackgroundUrl,
  getProductBackgroundById,
  getExampleWork,
  imageOnLoad,
  russianBearProducts,
  glenfiddichProducts,
  rockingTheDaisiesProducts,
  mountVernonProducts,
  allWork,
};
