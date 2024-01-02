"use client";
import { useState } from "react";
import { ImageBanner, TextBanner, VideoBanner } from "../Banner/view";
import styles from "./styles.module.css";
import { SplashBannerProps } from "./types";

export default function SplashBanner(props: SplashBannerProps) {
  const [vid_load_stat, set_vid_load_stat] = useState(false);
  return (
    <div className={styles.main_container}>
      <TextBanner
        height={"87vh"}
        width={"40%"}
        title={"Mic Check Entertainment"}
        description={"Let us take care of your wedding."}
        style={{ padding: "0vh 2vh" }}
      />
      <VideoBanner
        height={"87vh"}
        width={"60%"}
        src={"/videos/splash_page.mp4"}
        borderRadius="7px"
        load_stat={set_vid_load_stat}
      />
      <ImageBanner
        height={"87vh"}
        width={"60%"}
        src={"/images/dj_kev_luu_side.jpg"}
        style={{
          position: "absolute",
          right: "0",
          transition: "opacity 1s ease",
          opacity: vid_load_stat ? "0" : "1",
        }}
        borderRadius="7px"
      />
    </div>
  );
}
