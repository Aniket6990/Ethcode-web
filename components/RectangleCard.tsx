import Image from "next/image";
import React from "react";
import { RectangleCardType } from "../types/types";

const RectangleCard = (props: RectangleCardType) => {
  const { alt, desc, headText, image } = props;
  return (
    <>
      <div className="Rectangle-card">
        <div className="Card-head">
          <Image src={image} alt={alt} className="Card-Image" />
          <span className="card-Head-Text">{headText}</span>
        </div>
        <span className="card-desc">{desc}</span>
      </div>
    </>
  );
};

export default RectangleCard;
