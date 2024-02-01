"use client"

import { useState, useEffect } from "react"
import useSWR from 'swr';
import styles from "./slides.module.css"

export default function Slides() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR('/api/readcovers', fetcher);
  const [id, setId] = useState(0);

  // Automatic Slider and Dots
  const [automatic, setAutomatic] = useState(1);

  useEffect(() => {
    if (automatic)
      setTimeout(() => data && (setId((id + 1) % data.length)), 3500);
  });

  // function Dot({num}: {num: number}) {
  //   return (
  //     <span className={styles.dot} style={{ backgroundColor: num == id ? "Green" : "none" }} onClick={() => {
  //       setId(num);
  //       setAutomatic(0);
  //     }} />
  //   )
  // }

  // Automatic Slider End

  function leftClick() {
    setId(id === 0 ? data.length - 1 : id - 1);
    setAutomatic(0);
   }

  function rightClick() {
    setId(id === data.length - 1 ? 0 : id + 1);
    setAutomatic(0);
  }

  return (
    <>
      <div className={styles.sliderMainContainer}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {data && data.map((cover: string, num: number) => (
              <img className={styles.fade} src={cover} alt={cover} key={cover} style={{ display: num == id ? "block" : "none" }}/>
            ))}
            <h1 className={styles.leftArrow}>
              <span className="material-symbols-outlined" onClick={leftClick} style={{fontSize: "48px"}}>
                chevron_left
              </span>
            </h1>
            <h1 className={styles.rightArrow}>
              <span className="material-symbols-outlined" onClick={rightClick} style={{ fontSize: "48px" }}>
                chevron_right
              </span>
            </h1>
          </div>
        </div>
        <div className={styles.sliderTextContainer}>
          <h1>GREENES KA220-HED</h1>
        </div>
      </div>
      {/* <div style={{textAlign: "center"}}>
        {covers.map((_cover, num) => (
          <Dot key={`dot_${num}`} num={num}/>
        ))}
      </div> */}
    </>
  )
}
