import axios from "axios";

export const fetchCategoryApi = async (category) => {
  const URL = `http://localhost:9001`;
  try {
    const payload = await axios.get(`${URL}/${category}`);
    if (!payload) {
      throw new Error("User Does not Exist");
    }
    return payload.data;
  } catch (err) {
    console.log(err);
  }
};

