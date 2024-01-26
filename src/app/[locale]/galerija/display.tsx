// GalleryDisplay.js
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import styles from "./galerija.module.css";

type GalleryDisplayProps = {
  photos: Array<{ src: string; width: number; height: number }>;
};

const GalleryDisplay: React.FC<GalleryDisplayProps> = ({ photos }) => {
  const [index, setIndex] = useState(-1);

  return (
    <div className={styles.galleryContainer}>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default GalleryDisplay;
