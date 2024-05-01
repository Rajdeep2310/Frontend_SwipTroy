import axios from "axios";

export const likeApi = async (token, postID) => {
  const URL = `http://localhost:9001`;
  try {
    const like = await axios.post(
      `${URL}/like/${postID}`,
      {},
      {
        headers: { token },
      }
    );
    return like;
  } catch (err) {
    console.error(err);
  }
};
