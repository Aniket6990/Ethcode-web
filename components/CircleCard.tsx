import Image from "next/image";
import React from "react";
import { CircleCardType } from "../types/types";

const CircleCard = (props: CircleCardType) => {
  const { alt, desc, image, title } = props;
  return (
    <>
      <div id="circle-card">
        <Image src={image} alt={alt} id="circle-card-image"/>
        <div id="circle-card-title">{title}</div>
        <div id="circle-card-desc">{desc}</div>
      </div>
    </>
  );
};

export default CircleCard;
