import { getDetailByID } from './api.js';

const getAnchorQuery = async () => {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('?');
  let id = urlParts[1];
  if (urlParts.length === 1) {
    return console.log('error 404');
  }

  const food = await getDetailByID(id);

  //   if (food.nutrition != null) {
  //      writeNutritionToHtml(food.nutrition);
  //   }
  // writeDetailToHtml(food.image, food.title, food.summary);

  console.log(id);
};

export { getAnchorQuery };
