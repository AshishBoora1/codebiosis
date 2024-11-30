import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onIconClick: () => void; // Define the type for onClick function
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  onIconClick,
}) => {
  return (
    <div className="relative pb-14 shadow-lg rounded-lg bg-white">
      <div className="relative h-60 w-full mb-4">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <Image
          src="/icons/angle_icon.svg"
          alt=""
          width={25}
          height={25}
          className="absolute right-3 bottom-5 bg-primary-natural rounded-full p-2 cursor-pointer"
          onClick={onIconClick}
        />
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="m-1 rounded-full"
          >
            {tag}
          </Button>
        ))}
      </div>
      {/* Image component at bottom-right corner */}
    </div>
  );
};

export default Card;
