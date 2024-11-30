import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface CaseStudyProps {
  id?: string;
  title: string;
  description: string;
  categories: string[];
  image: string;
  className?: string;
}

const CaseStudyCard: FC<CaseStudyProps> = ({
  title,
  description,
  categories,
  className,
  image,
  id,
}) => {
  const navigate = useRouter();
  return (
    <div className={cn("max-w-[600px] px-4 rounded overflow-hidden", className)}>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full"
        />
        <Image
          src="/icons/angle_icon.svg"
          alt=""
          width={25}
          height={25}
          className="absolute bottom-3 right-3 bg-primary-natural rounded-full p-2"
          onClick={() => navigate.push(`/case-study/${id}`)}
        />
      </div>
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="pt-4 pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            variant={"outline"}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;
