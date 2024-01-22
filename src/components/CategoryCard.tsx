import React from "react";
import Button from "./Button";

interface CategoryCardProps {
  image?: string;
  text?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, text }) => {
  const cardStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={cardStyle}
      className="h-96 w-60 flex justify-center items-end p-4 rounded-xl shadow-lg lg:w-[400px] lg:h-[600px] ">
      <Button>{text}</Button>
    </div>
  );
};

export default CategoryCard;
