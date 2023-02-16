import React, { useEffect, useState } from "react";
import "./Feedback.css";
import axios from "axios";
import { useDataLayerValue } from "../datalayer/DataLayer";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState({});
  useEffect(() => {
    axios
      .get("https://calm-erin-wasp-cape.cyclic.app/feedback")
      .then((resp) => {
        setFeedbacks(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="feedbacks">
      {feedbacks?.data?.map((res) => {
        return (
          <div key={res._id} className="feedback">
            <hp className="feed-name">{res.name} </hp>
            <p className="feed-email">{res.email} </p>
            <p className="feed-message">{res.message} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Feedback;
