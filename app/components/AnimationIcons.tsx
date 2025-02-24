"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface AnimationIconsProps {
  type:
    | "mail"
    | "register"
    | "pdf"
    | "call"
    | "location"
    | "blog"
    | "search"
    | "newspaper"; // Asegurar que `type` es uno de estos valores
  size?: number;
}

const AnimationIcons: React.FC<AnimationIconsProps> = ({
  type,
  size = 100,
}) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    let animationFile = "";
    switch (type) {
      case "mail":
        animationFile = "/animations/mail.json";
        break;
      case "register":
        animationFile = "/animations/Register.json";
        break;
      case "pdf":
        animationFile = "/animations/pdf.json";
        break;
      case "call":
        animationFile = "/animations/call.json";
        break;
      case "location":
        animationFile = "/animations/location.json";
        break;
      case "blog":
        animationFile = "/animations/blog.json";
        break;
      case "search":
        animationFile = "/animations/search.json";
        break;
      case "newspaper":
        animationFile = "/animations/newspaper.json";
        break;
    }

    fetch(animationFile)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error(`Error al cargar ${type}.json`, err));
  }, [type]);

  if (!animationData) return <p>Cargando...</p>;

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: size, height: size }}
    />
  );
};

export default AnimationIcons;
