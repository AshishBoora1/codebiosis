export interface services {
  title: string;
  description: string;
  icon: string;
  data?: services[];
}

export const serviceData: services[] = [
  {
    title: "Development",
    description: "Build robust and scalable digital solutions with CodeBiosis's development services. We specialize in creating custom websites, applications, and software that are tailored to your business needs, ensuring functionality, performance, and security.",
    icon: "/services/development.svg",
    data: [
      {
        title: "Strategy",
        description: "We are a team of strategists, designers and developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
      {
        title: "Design",
        description: "We create visually appealing designs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
      {
        title: "CMS Development",
        description: "We build scalable and efficient applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
      {
        title: "Testing",
        description: "We ensure quality through rigorous testing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
      {
        title: "Deployment",
        description: "We deploy applications securely and efficiently. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
    ],
  },
  {
    title: "Ai Integration",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/services/ai.svg",
    data: [
      {
        title: "Strategy",
        description: "We are a team of strategists, designers and developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
      {
        title: "Design",
        description: "We create visually appealing designs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
      {
        title: "CMS Development",
        description: "We build scalable and efficient applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
      {
        title: "Testing",
        description: "We ensure quality through rigorous testing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
      {
        title: "Deployment",
        description: "We deploy applications securely and efficiently. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "/logos/straregy.svg",
      },
    ],
  }
]


export const serviceDataMain : any =
{
  "development": {
    "description": {
      "text": "Build robust and scalable digital solutions with CodeBiosis's development services. We specialize in creating custom websites, applications, and software that are tailored to your business needs, ensuring functionality, performance, and security.",
      "icon": "DV",
    },
    "sections": { 
      "Shopify Theme Builds": "We create custom Shopify themes tailored to your brand's unique identity and business needs, ensuring a seamless and engaging shopping experience for your customers.",
      "System Integration": "Our system integration services connect various software and applications, enhancing functionality and streamlining your operations for improved efficiency and productivity.",
      "Magento Theme & Custom Builds": "Specializing in Magento, we design and develop custom themes and builds that provide a robust and scalable platform for your e-commerce business.",
      "Shopify App Solutions": "Developing custom Shopify apps to extend the functionality of your store, we ensure enhanced performance and a superior user experience.",
      "Replatforming": "Transitioning to headless commerce, we offer re-platforming services that enhance your website's speed, flexibility, and user experience.",
      "International Expansion": "Helping your business expand globally, we offer solutions to overcome the complexities of international e-commerce, including localization and compliance.",
      "Angular & Laravel Builds": "Our expertise in Angular and Laravel allows us to create dynamic and high-performing web applications tailored to your specific business requirements.",
      "Custom React Based Web Applications": "Developing custom React-based web applications, we deliver high-performance and scalable solutions that provide an exceptional user experience.",
      "Wordpress Theme & Custom Builds": "Creating custom WordPress themes and builds, we offer flexible and user-friendly solutions that cater to your content management and e-commerce needs.",      
      "Data Migration": "We handle data migration with precision, ensuring a smooth transition of your data from old systems to new, minimizing downtime and data loss.",
      
    }
  },
  "design": {
    "description": {
      "text": "Create stunning and user-friendly digital experiences with CodeBiosis's design services. Our team crafts visually appealing and intuitive designs that enhance user engagement and reflect your brand’s identity. From UI/UX to graphic design, we bring your vision to life with creativity and precision.",
      "icon": "DSGN_"
    },
    "sections": {
      "Promotional Email Design": "We craft visually appealing and effective promotional email designs that captivate your audience and drive engagement and conversions.",
      "Photo Retouching": "Our photo retouching services enhance the visual appeal of your product images, ensuring they look professional and attractive to potential customers.",
      "Video Editing": "Providing professional video editing services, we help you create compelling and polished videos that effectively communicate your brand message.",
      "Data Driven UI/UX": "Using data-driven insights, we design UI/UX that enhances user satisfaction and engagement, resulting in higher conversion rates.",
      "Website Conversion Rate Audit": "Our website conversion rate audits identify areas for improvement, providing actionable recommendations to increase your site's conversion rates."
    }
  },
  "brand identity": {
    "description": {
      "text": "Forge a strong, memorable brand with CodeBiosis's brand identity services. We develop cohesive and impactful branding strategies that capture your essence and resonate with your audience. From logo design to brand guidelines, we ensure your brand stands out and leaves a lasting impression.",
      "icon": "BI_",
    },
    "sections": {
      "Strategy": "We develop comprehensive strategies that align with your business goals, ensuring a clear roadmap to success.",
      "Brand": "Building a strong brand identity, we help you create a memorable and impactful presence in the market.",
      "Packaging": "Our packaging design services create visually appealing and functional packaging that enhances your product's appeal and brand image.",
      "Digital Presence": "Enhancing your digital presence, we provide strategies and solutions that increase your visibility and engagement online.",
      "Social Media Posts": "Crafting engaging social media posts, we help you connect with your audience and build a loyal community around your brand.",
      "Email Marketing Designs": "Our email marketing designs are crafted to capture attention and drive conversions, ensuring your campaigns are both visually appealing and effective.",
    }
  },
  "marketing": {
    "description":
    {
      "text": "Elevate your online visibility with CodeBiosis's SEO services. We optimize your website to rank higher on search engines, driving more organic traffic and increasing your reach. Our expert team uses the latest techniques to ensure your site performs at its best and attracts quality leads.",
      "icon": "MRK_"
    },
    "sections": {
      "Performance Marketing": "Maximize ROI with data-driven PPC, affiliate marketing, and conversion optimization. Codebiosis delivers transparent, results-focused strategies for efficient growth.",
      "Email Marketing": "Specializing in email marketing, we create campaigns that engage your audience, build relationships, and drive sales.",
      "Digital Marketing": "Offering comprehensive digital marketing services, we help you reach and engage your target audience across various online platforms.",
      "Social Media Marketing": "Our social media marketing services boost your online presence and engagement, helping you build a strong and interactive community.",
    }
  },
  "seo": {
    "description": {
      "text":"We can produce a well-designed e-commerce store that allows users to visit the site in a simple and efficient manner. We make it a point to maintain the information fresh and available at all times, thanks to a dedicated team.",
      "icon":"SEO_",
    },"sections": {
      "On Page SEO": "We optimize your website's on-page elements to improve its search engine ranking and visibility, driving more organic traffic to your site.",
      "Off Page SEO": "Our off-page SEO strategies enhance your website's authority and reputation, contributing to higher search engine rankings.",
      "BackLinks": "Building high-quality backlinks, we improve your website's SEO performance and drive more traffic from authoritative sources.",
      "GMB Management": "We manage your Google My Business profile, ensuring accurate information and optimizing it for better local search visibility.",
      "PR Management": "Our PR management services help you build and maintain a positive public image, enhancing your brand's reputation and credibility."
    }
  },
  "AI SERVICES": {
    "description":{ 
      "text":"Transform your business with CodeBiosis's AI services. We harness the power of artificial intelligence to optimize processes, enhance decision-making, and drive innovation. From machine learning to data analysis, our AI solutions are designed to boost efficiency and unlock new opportunities for growth.",
     "icon":"AI_",
    },
    "icon":"AI_",
    "sections": {
      "Generative AI": "Leveraging generative AI, we create innovative solutions that enhance your business processes and user experiences.",
      "Smart AI Assistants & Chatbots": "Developing smart AI assistants and chatbots, we provide automated solutions that improve customer interaction and support.",
      "AI Product Development": "We specialize in AI product development, creating intelligent solutions that drive innovation and efficiency in your business.",
      "Recommendation Engines": "Our recommendation engines offer personalized product suggestions, enhancing user experience and increasing sales.",
      "AI Security": "Implementing AI-driven security solutions, we protect your business from cyber threats and ensure data integrity.",
      "AI as a Service (AIaaS)": "Offering AI as a Service, we provide scalable and flexible AI solutions tailored to your specific business needs.",
      "Automation Solutions": "Our automation solutions streamline your operations, reducing manual tasks and increasing efficiency.",
      "Predictive Modelling": "We use predictive modeling to forecast trends and behaviors, helping you make informed business decisions.",
      "Facial Recognition": "Our facial recognition solutions enhance security and user experiences through accurate and reliable identification technology.",
    }
  }
}
