// GalleryWrapper.js
import React from "react";
import { FormattedMessage } from "react-intl";
import IntlWrapper from "../../../components/IntlWrapper";
import GalleryDisplay from "./display";
import styles from "./galerija.module.css";

type GalleryWrapperProps = {
  params: { locale: string };
};

const GalleryWrapper: React.FC<GalleryWrapperProps> = ({ params: { locale } }) => {
  const photos = [
    { src: "/Resources/gallery/greenes_gallery_01.jpg", width: 1670, height: 1114 },
    { src: "/Resources/gallery/greenes_gallery_02.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_03.jpg", width: 1670, height: 1114 },
    { src: "/Resources/gallery/greenes_gallery_04.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_05.jpg", width: 1670, height: 1114 },
    { src: "/Resources/gallery/greenes_gallery_06.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_07.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_08.jpg", width: 1670, height: 1114 },
    { src: "/Resources/gallery/greenes_gallery_09.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_10.jpg", width: 1670, height: 1114 },
    { src: "/Resources/gallery/greenes_gallery_11.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_12.jpg", width: 1670, height: 1114 },
    { src: "/Resources/gallery/greenes_gallery_13.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_14.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_15.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_16.jpg", width: 1670, height: 1114 },
    { src: "/Resources/gallery/greenes_gallery_17.jpg", width: 1670, height: 1114 },
    { src: "/Resources/gallery/greenes_gallery_18.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_19.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_20.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_21.jpg", width: 800, height: 600 },
    { src: "/Resources/gallery/greenes_gallery_22.jpg", width: 1114, height: 1670 },
  ];

  return (
    <IntlWrapper locale={locale}>
      <div className={styles.galleryTitle}>
        <h1>
          <FormattedMessage id="pages.galerija" />
        </h1>
        <hr className={styles.hr} />
      </div>
      <GalleryDisplay photos={photos} />
    </IntlWrapper>
  );
};

export default GalleryWrapper;
