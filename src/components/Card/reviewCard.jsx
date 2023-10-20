import React from "react";
import { Avatar } from "react-daisyui";

const ReviewCard = ({ review }) => {
  return (
    <div className="card card-compact max-w-5xl lg:card-side shadow-xl mx-10 dark:bg-neutral dark:text-neutral-content">
      <div className="card-body">
        <div className="flex">
          <Avatar
            src={review.image}
            shape="circle"
            className="object-contain h-32 w-32"
          />
          <div className="flex flex-col">
            <h2 className="card-title">{review.customer_name}</h2>
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
        </div>
        <p className="text-lg">{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
