import React from "react";
import StartRating from "./StartRating";

const Card = ({id,linkImg,title,rating,price,category}) => {
  return (
    <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mr-4 my-4">
      <img src={linkImg} alt="" className="h-40 w-full object-cover" />
      <div className="p-5 border border-b ">
        <h1 className="py-2 truncate">{title}</h1>
        <StartRating key={id} rating={rating} />
      </div>
      <h3 className="p-5 text-xl">{price}</h3>
      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">{category}</div>
    </div>
  );
};

export default Card;
