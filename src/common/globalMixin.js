import * as productData from "./productData";

const backgroundUrl = productData.backgroundUrl;
const russianBearProducts = productData.russianBearProducts;
const glenfiddichProducts = productData.glenfiddichProducts;
const rockingTheDaisiesProducts = productData.rockingTheDaisies;

function getBackgroundUrl(id) {
  let background = backgroundUrl.find(item => item.id === id);
  return background ? background : "";
}

function getProductBackgroundById(id) {
  let product = backgroundUrl.find(item => item.id === id);
  return product;
}

export default {
  getBackgroundUrl,
  getProductBackgroundById,
  russianBearProducts,
  glenfiddichProducts,
  rockingTheDaisiesProducts
};
