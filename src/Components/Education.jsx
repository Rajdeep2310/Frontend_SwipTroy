import React, { useEffect, useState } from "react";
import { fetchCategoryApi } from "../api/fetchCategory";
import storyStyle from "../styles/story.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import storypopupStyle from "../styles/storypopup.module.css";
import CategoryStory from "./CategoryStory";

export default function FoodStories() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const payload = await fetchCategoryApi("education");
        setData(payload.data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEducation();
  }, []);

  const handleNewStory = async () => {
    try {
      const payload = await fetchCategoryApi("education");
      const newData = [...data, payload.data.posts[0]]; // Assuming new story is always added at the beginning
      setData(newData);
    } catch (err) {
      console.log(err);
    }
  };

  const firstCard = data.length > 0 ? data[0] : null;
  const restCards = showAll ? data.slice(1) : data.slice(1, 4);

  return (
    <div>
      <h1 className={storyStyle.pageheading}>Top Stories about Education</h1>
      {firstCard && (
        <Popup
          trigger={
            <div className={storyStyle.story}>
              <div className={storyStyle.details}>
                <h3 className={storyStyle.heading}>{firstCard.heading}</h3>
                <p className={storyStyle.description}>{firstCard.description}</p>
              </div>
              <img src={firstCard.images} className={storyStyle.image} alt="Story" />
            </div>
          }
          modal
          nested
          contentStyle={{
            width: "49rem",
            height: "37.8rem",
            backgroundColor: "transparent",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
          }}
        >
          <div className={storypopupStyle.storyContainer}>
            <CategoryStory data={data} />
          </div>
        </Popup>
      )}
      {restCards.map((story, index) => (
        <Popup
          key={index}
          trigger={
            <div className={storyStyle.story}>
              <div className={storyStyle.details}>
                <h3 className={storyStyle.heading}>{story.heading}</h3>
                <p className={storyStyle.description}>{story.description}</p>
              </div>
              <img src={story.images} className={storyStyle.image} alt="Story" />
            </div>
          }
          modal
          nested
          contentStyle={{
            width: "49rem",
            height: "37.8rem",
            backgroundColor: "transparent",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
          }}
        >
          <div className={storypopupStyle.storyContainer}>
            <CategoryStory data={data} />
          </div>
        </Popup>
      ))}
      {data.length > 4 && !showAll && (
        <button className={storypopupStyle.btnSeeMore} onClick={() => setShowAll(true)}>See More</button>
      )}
      <button onClick={handleNewStory}>Load New Story</button>
    </div>
  );
}
