import axios from 'axios';

const getDataFromAPI = async () => {
  try {
    const response = await axios
      .get(
        'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese'
      )
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.log('error =>', error);
  }
};

const getDetailByID = async (id) => {
  try {
    const response = await axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.log('error =>', error);
  }
};
export { getDataFromAPI, getDetailByID };
