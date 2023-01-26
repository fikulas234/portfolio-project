import { Fragment } from "react";
import Image from "next/image";

export default function Images(props) {
  const images = [
    {
      src: "images/icons/nextjs-original-wordmark.svg",
      alt: "next.js icon",
    },
    {
      src: "images/icons/react-original-wordmark.svg",
      alt: "react.js icon",
    },
    {
      src: "images/icons/javascript-original.svg",
      alt: "javascript icon",
    },
    {
      src: "images/icons/css3-plain-wordmark.svg",
      alt: "css3 icon",
    },
    {
      src: "images/icons/html5-plain-wordmark.svg",
      alt: "html5 icon",
    },
    {
      src: "images/icons/git-plain-wordmark.svg",
      alt: "git icon",
    },
  ];

  return (
    <Fragment>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          height={150}
          width={150}
          alt={img.alt}
          onClick={props.clicked}
        />
      ))}
    </Fragment>
  );
}
