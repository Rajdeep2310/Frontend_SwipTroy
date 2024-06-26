import axios from "axios";

export const fetchUserBookMark = async (token, user_id) => {
  const URL = `http://localhost:9001`;
  try {
    const payload = await axios.get(`${URL}/bookmarks/${user_id}`, {
      headers: { token },
    });
    if(!payload){
      return "Nothing to see here";
    }
    return payload.data
  } catch (err) {
    console.log(err);
  }
};
