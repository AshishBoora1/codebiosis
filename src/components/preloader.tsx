import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setShowLoader(true);
    
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  const getPathTitle = () => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/services":
        return "Services";
      case "/our-work":
        return "Our Work";
      case "/our-work/*":
        return "Our Projects";
        case "/about-us":
          return "Who We Are";
      case "/blog":
        return "Our Blog";
      case "/contact-us":
        return "Get In Touch";
      case "/careers":
        return "Careers";
      case "/case-study":
        return "Case Studies";
      case "our-team":
        return "Our Team";  
      default:
        if (pathname.startsWith("/our-work")) {
          return "Our Projects";
        }
        if (pathname.startsWith("/blog")) {
          return "Chechout our blogs";
        }
        if(pathname.startsWith("/case-study")) {
          return "Case Studies";
        }
        return "";
    }
  };

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 text-white flex justify-center items-center py-4 bg-primary-natural"
          style={{ zIndex: 9999 }}>
          <motion.h1
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-6xl font-semibold text-primary-white">
            {getPathTitle()}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
