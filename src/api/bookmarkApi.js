import axios from "axios";

export const bookmarkApi = async (token,groupID) => {
  const URL = `http://localhost:9001`;
  try {
    const response = await axios.post(`${URL}/bookmark/${groupID}`,{},
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
