import { getDataFromAPI } from './api.js';

const writeFoodsToHTML = async () => {
  const foods = await getDataFromAPI();
  writeData(foods.meals);
};
const writeData = (foods) => {
  const container = document.getElementById('container-content');
  foods.map((food) => {
    container.innerHTML += `<a href="food.html?${food.idMeal}" class="text-decoration-none text-secondary">
                                <div class="card" style="width: 18rem">
                                    <img src="${food.strMealThumb}" class="card-img-top" alt="${food.strMeal}" width="150px"
                                    height="200px" />
                                    <div class="card-body">
                                      <h6 class="card-title">${food.strMeal}</h6>  
                                    </div>
                                </div>
                              </a>`;
  });
};

export { writeFoodsToHTML };
