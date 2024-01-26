"use client"
import React from "react";
import GalleryWrapper from "./wrapper";

type GalleryProps = {
  params: { locale: string };
};

const Gallery: React.FC<GalleryProps> = ({ params }) => {
  return <GalleryWrapper params={params} />;
};

export default Gallery;

