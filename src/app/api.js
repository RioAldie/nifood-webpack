const getDataFromAPI = async () => {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese'
    );
    const foods = await response.json();

    return foods;
  } catch (error) {
    console.log('error =>', error);
  }
};

const getDetailByID = async (id) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const food = await response.json();
    console.log(food);
    return food;
  } catch (error) {
    console.log('error =>', error);
  }
};
export { getDataFromAPI, getDetailByID };
