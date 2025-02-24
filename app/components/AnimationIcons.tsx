"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Cargar Lottie solo en el cliente
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimationIconsProps {
  type:
    | "mail"
    | "register"
    | "pdf"
    | "call"
    | "location"
    | "blog"
    | "search"
    | "newspaper";
  size?: number;
}

const AnimationIcons: React.FC<AnimationIconsProps> = ({ type, size = 100 }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Evita SSR

    setIsMounted(true);

    const animations: Record<string, string> = {
      mail: "/animations/mail.json",
      register: "/animations/Register.json",
      pdf: "/animations/pdf.json",
      call: "/animations/call.json",
      location: "/animations/location.json",
      blog: "/animations/blog.json",
      search: "/animations/search.json",
      newspaper: "/animations/newspaper.json",
    };

    const animationFile = animations[type] || "";

    if (animationFile) {
      fetch(animationFile)
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error(`Error al cargar ${type}.json`, err));
    }
  }, [type]);

  if (!isMounted || !animationData) return null;

  return <Lottie animationData={animationData} loop={true} style={{ width: size, height: size }} />;
};

export default AnimationIcons;
