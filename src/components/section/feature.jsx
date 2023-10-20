import React from "react";
import { Button, Card } from "react-daisyui";

const cardData = [
  {
    title: "Exclusive Discounts",
    description: "Enjoy member-only savings on the latest tech products",
  },
  {
    title: "Early Access",
    description: "Be the first to explore and purchase new gadgets",
  },
  {
    title: "Tech Insights",
    description: "Get expert reviews and guides for informed choices",
  },
  {
    title: "Personalized Picks",
    description: "Receive tailored tech recommendations",
  },
];

const Features = () => {
  const renderedCards = cardData.map((card, index) => (
    <Card compact key={index} className="p-4 bg-indigo-300 shadow-xl hover:scale-105 transform transition duration-300">
      <Card.Title className="dark:text-black">{card.title}</Card.Title>
      <Card.Body>
        <p className="dark:text-black">{card.description}</p>
      </Card.Body>
    </Card>
  ));

  return (
    <div className="flex flex-col lg:flex-row justify-around hero bg-base-300 p-10">
      <div className="flex flex-col justify-center items-start max-w-xl mb-16 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold">ElectroPerks</h2>
        <h2 className="text-2xl font-semibold mb-4">Your Gateway to Exclusive Tech Benefits</h2>
        <p className="text-left text-lg mb-4">
          Where Savings Meet Innovation: Unlock a World of Discounts, Discover
          Cutting-Edge Electronics, and Dive into Digital Delights All at Your
          Fingertips for an Unmatched Tech Shopping Experience!
        </p>
        <Button color="primary" className="hover:scale-105 transform transition duration-300">Explore</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderedCards}
      </div>
    </div>
  );
};

export default Features;
