'use client';

import AnimatedSeparator from '@/components/animatedSaperator';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useCycle } from 'framer-motion';
import Lottie from 'lottie-react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LottieAnimation from './lottiePlayer';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const socials = [
  {
    title: 'linkedin',
    darkIcon: '/icons/LinkedIn.svg',
    lightIcon: '/icons/LinkedIn_light.svg',
    link: 'https://www.linkedin.com/company/codebiosis-private-limited/?originalSubdomain=in',
  },
  {
    title: 'Instagram',
    darkIcon: '/icons/Instagram.svg',
    lightIcon: '/icons/Instagram_light.svg',
    link: 'https://www.instagram.com/codebiosis/',
  },
  {
    title: 'Facebook',
    darkIcon: '/icons/Facebook.svg',
    lightIcon: '/icons/Facebook_light.svg',
    link: 'https://www.facebook.com/codebiosispvtltd',
  },
];

const menuItems = [
  { title: 'What We Offer', link: '/services' },
  { title: 'Our Work', link: '/our-work' },
  { title: 'Who We Are', link: '/about-us' },
  { title: 'Resources', link: '/blog' },
  // { title: 'Case Studies', link: '/case-study' },
  // { title: "Meet Us", link: "/our-team" },
  // { title: "Careers", link: "/careers" },
];

const linkMap: any = {
  '/services': 'What We Offer',
  '/our-work': 'Our Work',
  '/about-us': 'Who We Are',
  '/blog': 'Resources',
  '/case-study': 'Case Studies',
  '/': 'Home',
  '/contact-us': 'Contact',
};
function NavigationBar() {
  const path = usePathname();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isHidden, setIsHidden] = useState(false);
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    setActiveRoute(path);
  }, [path]);
  return (
    <>
      <MenueItemContainer
        activeRoute={activeRoute}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
      <div className='py-10 flex flex-row relative justify-between items-center'>
        <Menu
          className='w-8 h-8 cursor-pointer hidden md:block'
          onClick={() => setIsHidden(!isHidden)}
        />
        <Link
          href={'/'}
          className='text-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold'
        >
          <LottieAnimation
            animationData={require('@/../public/lottiee/HomePage/Logo_JSON.json')}
            className='max-h-[60px] max-w-[240px]'
          />
        </Link>
        <div className='hidden md:flex flex-row justify-center items-center gap-3'>
          {socials.map((social, index) => (
            <SocialButton
              key={index}
              title={social.title}
              darkIcon={social.darkIcon}
              lightIcon={social.lightIcon}
              link={social.link}
              onClick={() => console.log(`Clicked on ${social.title}`)}
            />
          ))}
        </div>
      </div>
      <AnimatedSeparator />

      {/* 
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary-natural overflow-hidden absolute top-0 left-0 w-screen px-20 z-50"
      >
        <div className={`py-10 flex flex-row justify-between items-center`}>
          <button onClick={() => toggleOpen()}>
            <Image alt={"menu"} src="/icons/cross.svg" height={30} width={30} />
          </button>
          <h1 className="text-3xl font-bold text-primary-white">{`{CodeBiosis}`}</h1>
          <div className="flex flex-row justify-center items-center gap-3">
            {socials.map((social, index) => (
              <SocialButton
                key={index}
                title={social.title}
                lightIcon={social.lightIcon}
                onClick={() => console.log(`Clicked on ${social.title}`)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-8 w-auto">
          <MenueItemContainer toggleOpen={toggleOpen} />
          <div className="flex flex-row justify-center items-center gap-6 text-primary-white font-medium my-8 ">
            <button>Terms of Conditions</button>
            <Separator className="h-6 bg-primary-white w-px" />
            <button>Privacy & Cookie Policy</button>
            <Separator className="h-6 bg-primary-white w-px" />
            <button>Site Map</button>
          </div> 
           <Separator className="h-px bg-[#D8D8D8] w-full opacity-50" />
        </div>
      </motion.div> */}
    </>
  );
}

export const SocialButton = ({ title, darkIcon, lightIcon, link, onClick }: any) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button onClick={onClick}>
      <Image alt={title} src={darkIcon ?? lightIcon} height={30} width={30} />
    </button>
  </a>
);

const MenueItemContainer = ({
  isHidden,
  setIsHidden,
  activeRoute,
}: {
  isHidden: boolean;
  setIsHidden: any;
  activeRoute: any;
}) => {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <div
      className={cn(
        'fixed z-[50] bottom-12 left-1/2 translate-x-[-50%] max-w-[1200px] w-[100vw] md:w-max p-2 duration-300 transition-all',
        !isHidden ? 'opacity-0 z-[-10]' : '',
      )}
      id='menu-container'
    >
      <div
        className={`md:hidden block ${showMenu ? 'rounded-[30px]' : 'rounded-[999px]'
          } w-full bg-radial-nav`}
      >
        <div
          className={`menu  ${showMenu ? 'max-h-96 py-2 border border-[#949494] border-solid' : 'max-h-0'
            } overflow-hidden transition-max-height duration-500 ease-in-out`}
        >
          {showMenu &&
            menuItems.map((item) => (
              <div
                key={item.link}
                className={`text-primary-white px-12 mx-2 py-5 ${activeRoute !== "/" && item?.link?.includes(activeRoute)
                    ? 'bg-[#949494] rounded-[30px]'
                    : ''
                  }`}
              >
                <Link
                  onClick={() => setShowMenu(false)}
                  href={item.link}
                  className='rounded-3xl hover:bg-primary-natural transition-all duration-500 p-3'
                >
                  {item.title}
                </Link>
              </div>
            ))}
        </div>
        <div className='p-2 flex justify-between items-center gap-3 '>
          {showMenu && (
            <Button
              className='flex gap-4 text-primary-white font-bold text-[18px] hover:bg-primary-natural transition-all duration-500 p-3 cursor-pointer'
              onClick={() => setShowMenu(!showMenu)}
            >
              <Image alt='' src={'/icons/cross.svg'} height={16} width={16} />{' '}
              Close
            </Button>
          )}
          {/* {!showMenu && (
            <Link
              href={'/'}
              className='bg-[#dfdfdf85]  text-primary-white font-bold text-[20px] md:text-xl rounded-[999px] px-[17px] py-[14px] md:p-3 md:px-7 cursor-pointer'
            >
              {'{ }'}
            </Link>
          )} */}
          {!showMenu && (
            <Button
              className='bg-[#dfdfdf85]  text-primary-white font-bold text-[20px] md:text-xl rounded-[999px] px-[17px] py-[14px] md:p-3 md:px-7 cursor-pointer ghost h-auto'
              onClick={() => setShowMenu(!showMenu)}
            >
              {'{ }'}
            </Button>
          )}
          {!showMenu && (
            <div className='md:hidden flex justify-between items-center text-primary-white gap-2'>
              <Link
                href={activeRoute}
                className=' rounded-3xl hover:bg-primary-natural transition-all duration-500 p-3 font-bold text-[18px]'
              >
                {linkMap[activeRoute]}
              </Link>
            </div>
          )}
          <div className='hidden md:flex justify-between items-center text-primary-white gap-2'>
            {menuItems.map((item) => (
              <Link
                href={item.link}
                key={item.link}
                className='rounded-3xl hover:bg-primary-natural transition-all duration-500 p-3'
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link href={'/contact-us'}>
            <button className='bg-[#F3F3F3] px-[17px] py-[14px] md:px-7 md:py-3 text-primary-natural rounded-[999px] font-bold text-[18px] md:text-xl'>
              {'Let’s Talk >'}
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-radial-nav p-2  hidden md:flex justify-between items-center gap-3 rounded-[999px] w-full'>
        <Link
          href={'/'}
          className='bg-[#dfdfdf85]  text-primary-white font-bold text-[20px] md:text-xl rounded-[999px] px-[17px] py-[14px] md:p-3 md:px-7 cursor-pointer'
        >
          {'{ }'}
        </Link>

        <div className='hidden md:flex justify-between items-center text-primary-white gap-2'>
          {menuItems.map((item) => (
            <Link
              href={item.link}
              key={item.link}
              className='rounded-3xl hover:bg-primary-natural transition-all duration-500 p-3'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link href={'/contact-us'}>
          <button className='bg-[#F3F3F3] px-[17px] py-[14px] md:px-7 md:py-3 text-primary-natural rounded-[999px] font-bold text-[18px] md:text-xl'>
            {'Let’s Talk >'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
