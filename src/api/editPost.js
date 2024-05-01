import axios from "axios";

export const EditApi = async (token,postID) => {
  const URL = `http://localhost:9001`;
  try {
    const response = await axios.post(`${URL}/edit/${postID}`,{},
      {
        headers: {
          token,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
