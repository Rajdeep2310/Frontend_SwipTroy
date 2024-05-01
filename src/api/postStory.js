import axios from "axios";

export const postStory = async (storyData, token) => {
  const URL = `http://localhost:9001`;

  try {
    const story = await axios.post(`${URL}/post`, storyData, {
      headers: { token },
    });

    return story.data;
  } catch (err) {
    console.log(err);
  }
};
