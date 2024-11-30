import React from 'react'

const DetailPoints = ({data}:any) => {

  return (
    <div className="pb-[20px] xl:pb-[125px]">
        {
            data.map((point:any , index:number) => (
                <div className="pt-[43px] xl:pt-[100px]" key={index}>
                    <div className="text-xl sm:text-2xl md:text-3xl xl:text-[40px] 2xl:text-[52px] font-bold">
                        {point.title}
                    </div>
                    <div className="text-[#525252] text-[15px] md:text-xl xl:text-2xl 2xl:text-[30px] font-normal mt-[15px] xl:mt-[30px] xl:leading-[40px] leading-[21px]">
                        {point.description}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DetailPoints