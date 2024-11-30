export interface TeamInterface {
    name: string
    role: string
    description: string
    image: string
    linkedin: string
    insta: string
    experience: string
    tags : string[]
    icon: string
}

export const team: TeamInterface[] = [
{
    name:"Alex Johnson",
    role:"UI/UX Designer",
    image:"/our-team/1.svg",
    description:"Tristique lacus magna platea turpis viverra urna posuere porttitor. Ipsum proin in tortor lacus id semper. Aliquet blandit nulla porta commodo ultrices dui in. At lectus in gravida ultricies lacus. Pharetra tellus proin ultricies ac.",
    icon:"/our-team/icon2.svg",
    linkedin:"https://www.linkedin.com/",
    insta:"https://www.instagram.com/",
    experience:"9+",
    tags:["UX/UI", "User-Centric Design","User Research","Wireframing","Prototyping","Visual Design","Color Theory","Branding"],
},{
    name:"Emily Rodriguez",
    role:"Frontend Developer",
    image:"/our-team/2.svg",
    description:"Tristique lacus magna platea turpis viverra urna posuere porttitor. Ipsum proin in tortor lacus id semper. Aliquet blandit nulla porta commodo ultrices dui in. At lectus in gravida ultricies lacus. Pharetra tellus proin ultricies ac.",
    icon:"/our-team/icon1.svg",
    linkedin:"https://www.linkedin.com/",
    insta:"https://www.instagram.com/",
    experience:"7+",
    tags:["Frontend", "Styled Components", "Figma", "AdobeXD"],
},
{
    name:"Sophia Brown",
    role:"Shopify Expert",
    image:"/our-team/3.svg",
    description:"Tristique lacus magna platea turpis viverra urna posuere porttitor. Ipsum proin in tortor lacus id semper. Aliquet blandit nulla porta commodo ultrices dui in. At lectus in gravida ultricies lacus. Pharetra tellus proin ultricies ac.",
    icon:"/our-team/icon4.svg",
    linkedin:"https://www.linkedin.com/",
    insta:"https://www.instagram.com/",
    experience:"10+",
    tags:["Theme Design", "Theme Development", "App Integration", "Cofiguration","Storefront Development","Performance Optimization","SEO Optimization","Theme Development", "App Integration", "Cofiguration","Storefront Development","Performance Optimization","SEO Optimization"],
},
{
    name:"Liam Anderson",
    role:"Digital Marketing & Seo Expert",
    image:"/our-team/4.svg",
    description:"Tristique lacus magna platea turpis viverra urna posuere porttitor. Ipsum proin in tortor lacus id semper. Aliquet blandit nulla porta commodo ultrices dui in. At lectus in gravida ultricies lacus. Pharetra tellus proin ultricies ac.",
    icon:"/our-team/icon3.svg",
    linkedin:"https://www.linkedin.com/",
    insta:"https://www.instagram.com/",
    experience:"8+",
    tags:["SEO", "Social Media Marketing", "Google Analytics", "SEO", "Social Media Marketing", "Google Analytics"],
}
]