import axios from "axios";

export const fetchUserPosts = async (token, user_id) => {
  const URL = `http://localhost:9001`;
  try {
    const userPosts = await axios.get(`${URL}/posts/${user_id}`, {
      headers: { token },
    });
    if (!userPosts.data) {
      return "Nothing to see here";
    }
    return userPosts.data;
  } catch (err) {
    console.log(err);
  }
};
