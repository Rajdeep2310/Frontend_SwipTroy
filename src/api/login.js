import axios from "axios";

export const loginUser = async (userData) => {
  const URL = `http://localhost:9001`;
  try {
    const user = await axios.post(`${URL}/login`, userData);
    if (!user) {
      throw new Error("User Does not Exist");
    }
    const loginToken = user.data.loginToken
    localStorage.setItem("loginToken",loginToken)
    return user.data;
  } catch (err) {
    console.log(err);
  }
};
