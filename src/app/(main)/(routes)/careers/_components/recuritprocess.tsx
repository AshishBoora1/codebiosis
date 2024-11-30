import Image from 'next/image'
import React from 'react'

const Recuritprocess = ({data }: any) => {
  return (
    <div className='border w-fit overflow-hidden border-[#D8D8D8] rounded-3xl'>
        <Image className='' src={"/careers/card.svg"} alt="" width={500} height={300}/>

        <div className="font-semibold text-xl px-4 pt-4">
            {data.title}
        </div>
        <div className="text-sm text-[#525252] max-w-[500px] p-4">
            {data.description}
        </div>
    </div>
  )
}

export default Recuritprocess