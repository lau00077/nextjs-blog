import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function SlideInImage({ src, alt, width, height, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once the image is visible
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold for when the animation triggers
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={imageRef}
      initial={{ x: 200, opacity: 0 }} // Start from off-screen right
      animate={isVisible ? { x: 0, opacity: 1 } : {}} // Move into view and fade in
      transition={{ ease: "easeInOut", duration: 1 }}
      className={className}
      style={{ width: width, height: height }}
    >
      <Image
        className="rounded-lg object-contain"
        width={width}
        height={height}
        layout="responsive"
        src={src}
        alt={alt}
      />
    </motion.div>
  );
}

