"use client"

import AnimatedButton from '@/components/AnimatedButton'
import React from 'react'

const Form = () => {
    const handleSubmit = (event: any) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        Array.from(formData.entries()).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });

    }
    return (
        <div>
            <form action="submit" onSubmit={handleSubmit} id='form' className='md:flex flex-col gap-12 pt-14 2xl:mt-[200px]'>
                <div className="md:flex  gap-10 2xl:gap-[145px] ">
                    <input type="text" name='name' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-5 mb-10 md:mb-0 2xl:mb-[120px] text-[30px] text-[#525252] rounded-[5px] ' placeholder='Full Name *' required />
                    <input type="email" name='email' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-5 mb-10 md:mb-0 2xl:mb-[120px] text-[30px] text-[#525252] rounded-[5px]' placeholder='Your Email Address *' required />
                </div>

                <div className="md:flex  gap-10 2xl:gap-[145px] ">
                    <input type="text" name='company' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-5 mb-10 md:mb-0 2xl:mb-[120px] text-[30px] text-[#525252] rounded-[5px]' placeholder="Your Phone / Contact Number *" required />
                    <input type="text" name="phone" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-5 mb-10 md:mb-0 2xl:mb-[120px] text-[30px] text-[#525252] rounded-[5px]' placeholder='Your Company / Organization’s Name' required />
                </div>

                <div className="md:flex  gap-10 2xl:gap-[145px] ">
                    <input type="text" name='company' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-5 mb-10 md:mb-0 2xl:mb-[120px] text-[30px] text-[#525252] rounded-[5px]' placeholder="Your Company / Store URL" required />
                    <input type="text" name="phone" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-5 mb-10 md:mb-0 2xl:mb-[120px] text-[30px] text-[#525252] rounded-[5px]' placeholder='Company Location' required />
                </div>

                <div className="flex">
                    <input type="text" name="message" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-5 mb-10 md:mb-0 2xl:mb-[78px] text-[30px] text-[#525252] rounded-[5px]' placeholder='How can we help ? *' required />
                </div>

                <div className='flex items-center gap-x-5'>
                    <input className='w-[46px] h-[46px] rounded-[10px]  ' type="checkbox" name="" id="" />
                    <p className='text-[#525252] font-medium italic text-[30px]   '>I agree to receive promotional and marketing emails from CodeBiosis about their products and solutions.</p>
                </div>

                <AnimatedButton className='w-fit mx-auto text-[28px] font-bold text-[#2B2B2B]  '>Send Message</AnimatedButton>
            </form>
        </div>
    )
}

export default Form