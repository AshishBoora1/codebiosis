import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface DesignBoxProps {
    title?: string
    text?: string
    img1?: string
    img2?: string
    className?: string
    classNameSeparator?: string
    imageUpper?: string
}
export const DesignUpperImage = ({imageUpper,className}:DesignBoxProps) => {
  return (
    <Image src={imageUpper || ""} alt="" className={cn("mt-14",className)} width={2100} height={700}/>
  )
}

export const DesignText = ({text , className}:DesignBoxProps) => {
  return (
    <p className={cn("my-8 text-center px-2 text-[#525252]",className)}>{text}</p>
  )
}

export const DesignLowerImage = ({img1,img2,className,classNameSeparator}:DesignBoxProps) => {
  return (
    <div className={cn("md:flex items-center w-full justify-center mt-16 mb-12",className)}>
      <Image src={img1 || ""} alt="" className='' width={500} height={300}/>
      <Separator className={`h-auto md:min-h-[200px] md:w-px bg-[#D8D8D8] md:mx-10`}/>
      <Image src={img2 || ""} alt="" width={500} height={300}/>
    </div>
  )
}



