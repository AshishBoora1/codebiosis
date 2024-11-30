import React, { ReactNode } from "react";
import Image from "next/image";

interface RatingProps {
  fullSymbol?: ReactNode;
  partialSympol?: ReactNode;
  value: string;
}

function Rating({ fullSymbol, partialSympol, value }: RatingProps) {
  const [fullRatingCount, partialRatingCount] = String(value).split(".");

  const fullSymbolImage = (
    <Image src="/vectors/rating_start.svg" alt="" height={25} width={25} />
  );
  const partialSymbolImage = (
    <Image
      src="/vectors/partial_rating_start.svg"
      alt=""
      height={25}
      width={25}
    />
  );

  return (
    <div className="flex flex-row flex-nowrap items-center gap-2 ">
      {fullRatingCount &&
        partialRatingCount &&
        Array.from({ length: Number(fullRatingCount) + 1 }).map(
          (item, index) => {
            if (index < Number(fullRatingCount))
              return fullSymbol ?? fullSymbolImage;
            if (Number(partialRatingCount) != 0)
              return partialSympol ?? partialSymbolImage;
          }
        )}
      {fullRatingCount &&
        !partialRatingCount &&
        Array.from({ length: Number(fullRatingCount) }).map((item, index) => {
          return fullSymbol ?? fullSymbolImage;
        })}
    </div>
  );
}

export default Rating;
