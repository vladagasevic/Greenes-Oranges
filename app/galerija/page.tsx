"use client";
import { useState } from "react";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import styles from "./galerija.module.css"

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function gallery() {

  const [index, setIndex] = useState(-1);

  const photos = [
    { src: "Resources/gallery/greenes_gallery_01.jpg", width: 1670, height: 1114 },
    { src: "Resources/gallery/greenes_gallery_02.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_03.jpg", width: 1670, height: 1114 },
    { src: "Resources/gallery/greenes_gallery_04.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_05.jpg", width: 1670, height: 1114 },
    { src: "Resources/gallery/greenes_gallery_06.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_07.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_08.jpg", width: 1670, height: 1114 },
    { src: "Resources/gallery/greenes_gallery_09.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_10.jpg", width: 1670, height: 1114 },
    { src: "Resources/gallery/greenes_gallery_11.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_12.jpg", width: 1670, height: 1114 },
    { src: "Resources/gallery/greenes_gallery_13.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_14.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_15.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_16.jpg", width: 1670, height: 1114 },
    { src: "Resources/gallery/greenes_gallery_17.jpg", width: 1670, height: 1114 },
    { src: "Resources/gallery/greenes_gallery_18.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_19.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_20.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_21.jpg", width: 800, height: 600 },
    { src: "Resources/gallery/greenes_gallery_22.jpg", width: 1114, height: 1670 },
    
  ];

  return (
    <>
    <div className={styles.galleryContainer}>
      <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      </div>
    </>
  );


}


