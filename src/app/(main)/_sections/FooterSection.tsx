import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialButton } from "../_components/navigationbar";
import Lottie from "lottie-react";
import LottieAnimation from "../_components/lottiePlayer";

const socials = [
  {
    title: "LinkedIn",
    darkIcon: "/icons/LinkedIn.svg",
    lightIcon: "/icons/LinkedIn_light.svg",
    link: "https://www.linkedin.com/company/codebiosis-private-limited/?originalSubdomain=in",
  },
  {
    title: "Instagram",
    darkIcon: "/icons/Instagram.svg",
    lightIcon: "/icons/Instagram_light.svg",
    link: "https://www.instagram.com/codebiosis/",
  },
  {
    title: "Facebook",
    darkIcon: "/icons/Facebook.svg",
    lightIcon: "/icons/Facebook_light.svg",
    link: "https://www.facebook.com/codebiosispvtltd",
  },
];

const handleSocialClick = (url: string | URL | undefined) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function Footer() {
  return (
    <div className="sm:mt-[37px] px-[30px] md:px-0 pb-48">
      <div className="block md:flex justify-between md:pb-5 border-b border-[#D8D8D8] items-center">
        <div className="">
          <LottieAnimation
            animationData={require("@/../public/lottiee/HomePage/Footer.json")}
            className="hidden md:block max-h-[300px] max-w-[300px] 2xl:max-h-[338px] 2xl:max-w-[553px]"
          />

          <div className="hidden md:flex flex-wrap gap-x-[30px] gap-y-[10px] 2xl:gap-x-[60px] 2xl:gap-y-[30px] mt-4 2xl:mt-[90px] mb-4 2xl:mb-[87px] w-full max-w-[400px]">
            <Link href={"/services"}>What We Offer</Link>
            <Link href={"/our-work"}>Our Work</Link>
            <Link href={"/about-us"}>Who We Are</Link>
            <Link href={"/blog"}>Resources</Link>
            {/**            <Link href={'/case-study'}>Case Studies</Link> */}
            <Link href={"/contact-us"}>Meet Us</Link>
            <Link href={"/careers"}>Careers</Link>
          </div>
        </div>

        <div className="flex flex-col md:items-end ">
          <div className="flex gap-4 items-center mb-5 justify-between md:justify-start">
            <Image
              src={"/vectors/Union.svg"}
              alt=""
              height={60}
              width={60}
              className="hidden md:block"
            />
            <h3 className="text-3xl 2xl:text-[80px] font-bold">
              Let&apos;s Talk
            </h3>
            <div className="md:hidden flex gap-4 my-5">
              <SocialButton
                title={"Facebook"}
                lightIcon={"/icons/Facebook.svg"}
                onClick={() =>
                  handleSocialClick("https://www.facebook.com/codebiosispvtltd")
                }
              />
              <SocialButton
                title={"LinkedIn"}
                lightIcon={"/icons/LinkedIn.svg"}
                onClick={() =>
                  handleSocialClick(
                    "https://www.linkedin.com/company/codebiosis-private-limited/?originalSubdomain=in"
                  )
                }
              />
              <SocialButton
                title={"Instagram"}
                lightIcon={"/icons/Instagram.svg"}
                onClick={() =>
                  handleSocialClick("https://www.instagram.com/codebiosis/")
                }
              />
            </div>

            {/* <div className="md:hidden flex gap-4 my-5">
              {socials.map((social, index) => (
                <SocialButton
                  key={index}
                  title={social.title}
                  lightIcon={social.lightIcon}
                  onClick={() => handleSocialClick(social.link)}
                />
              ))}
            </div> */}
          </div>
          <div className="hidden md:block pb-4 2xl:pb-[50px]">
            North India • South India  • USA
          </div>
          <div className="hidden md:block pb-[25px]">+91 6307 080 414</div>
          <div className="hidden md:block">sales@codebiosis.com</div>
          {/* <div className='hidden md:flex gap-4 my-5'>
            <SocialButton
              title={'Facebook'}
              lightIcon={'/icons/Facebook.svg'}
              onClick={() => {}}
            />
            <SocialButton
              title={'LinkedIn'}
              lightIcon={'/icons/LinkedIn.svg'}
              onClick={() => {}}
            />
            <SocialButton
              title={'Instagram'}
              lightIcon={'/icons/Instagram.svg'}
              onClick={() => {}}
            />
          </div> */}

          <div className="hidden md:flex gap-4 my-4 2xl:my-10">
            {socials.map((social, index) => (
              <SocialButton
                key={index}
                title={social.title}
                darkIcon={social.darkIcon}
                onClick={() => handleSocialClick(social.link)}
              />
            ))}
          </div>

          <div className="flex gap-[20px] md:gap-2 2xl:gap-8 items-center justify-center md:justify-start 2xl:pt-14">
            <Image
              src={"/partners/shopify-plus-partner.svg"}
              alt=""
              height={50}
              width={100}
            />
            <Image
              src={"/partners/adobe_solution_partner.svg"}
              alt=""
              height={50}
              width={100}
            />
            <Image
              src={"/partners/zoho_partner.svg"}
              alt=""
              height={50}
              width={100}
            />
          </div>

          <div className="md:hidden flex justify-between mt-10 mb-5 items-center">
            <Link href={"/terms-condition"}>Trems & Condtions</Link>
            <Separator
              className="w-px bg-[#D8D8D8] mx-6"
              orientation="vertical"
              style={{
                height: "18px",
                width: "2px",
                backgroundColor: "rgba(43, 43, 43, 1)",
              }}
            />
            <Link href={"/privacy-policy"}>Privacy & Cookie Policy</Link>
            <Separator
              className="w-px bg-[#D8D8D8] mx-6"
              orientation="vertical"
              style={{
                height: "18px",
                width: "2px",
                backgroundColor: "rgba(43, 43, 43, 1)",
              }}
            />
            <div>Sitemap</div>
          </div>
        </div>
      </div>

      <div className="flex py-4 w-full justify-center md:justify-between">
        <div className="text-[#8D8D8D] ">
          © 2023, CodeBiosis Private Limited.
        </div>

        <div className="hidden md:flex">
          <Link href={"/terms-condition"} className="">
            Trems & Condtions
          </Link>
          <Separator
            className="w-px bg-[#D8D8D8] mx-6"
            orientation="vertical"
            style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}
          />
          <Link href={"/privacy-policy"} className="">
            Privacy & Cookie Policy
          </Link>
          <Separator
            className="w-px bg-[#D8D8D8] mx-6"
            orientation="vertical"
            style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}
          />
          <div className="">Sitemap</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
