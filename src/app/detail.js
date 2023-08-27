import { getDetailByID } from './api.js';

const writeCardDetailFood = (food) => {
  const detailElement = document.getElementById('detail-box');
  if (!detailElement) {
    return null;
  }
  detailElement.innerHTML = `<div class="img-food">
    <img
      src="${food.strMealThumb}"
      class="img-fluid border border-4 rounded rounded-2"
      width="500"
    
      alt="" />
  </div>
  <div class="info-food border-2">
    <p class="food-name text-light">
      ${food.strMeal}
    </p>
    <p class="category text-light">${food.strCategory}</p>
    <p class="price-tag">Price: $29</p>
  </div>`;
};

const writeFoodNotFound = () => {
  const detailElement = document.getElementById('detail-box');
  detailElement.innerHTML = `<p> Food Not Found </p>`;
};

const getAnchorQuery = async () => {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('?');
  let id = urlParts[1];
  if (urlParts.length === 1) {
    return console.log('error 404');
  }

  const food = await getDetailByID(id);

  if (!food) {
    writeFoodNotFound();
  }

  writeCardDetailFood(food.meals[0]);
};
export { getAnchorQuery };
