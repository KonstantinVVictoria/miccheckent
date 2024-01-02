import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import {
  BannerContainerProps,
  ImageBannerProps,
  TextBannerProps,
  VideoBannerProps,
} from "./types";

function BannerContainer(props: BannerContainerProps) {
  const style = {
    height: props.height,
    width: props.width,
    borderRadius: props.borderRadius,
  };
  return (
    <div className={styles.main_container} style={{ ...style, ...props.style }}>
      {props.children}
    </div>
  );
}

export function ImageBanner(props: ImageBannerProps) {
  return (
    <BannerContainer
      height={props.height}
      width={props.width}
      borderRadius={props.borderRadius || "0px"}
      style={props.style}
    >
      <img
        width="100%"
        height="100%"
        className={styles.image}
        src={props.src}
      />
    </BannerContainer>
  );
}

export function TextBanner(props: TextBannerProps) {
  return (
    <BannerContainer
      height={props.height}
      width={props.width}
      borderRadius={props.borderRadius || "0px"}
      style={props.style}
    >
      <section className={styles.text_banner_section}>
        {props.title ? <h2>{props.title}</h2> : null}
        <p>{props.description}</p>
      </section>
    </BannerContainer>
  );
}

export function VideoBanner(props: VideoBannerProps) {
  const video_ref = useRef(null);
  const style = {
    height: "100%",
    width: "100%",
    borderRadius: props.borderRadius,
  };
  useEffect(() => {
    const video = video_ref.current as unknown as HTMLVideoElement;
    console.log(video.readyState);
    if (video.readyState === 4) {
      props.load_stat(true);
    }
  }, []);
  return (
    <BannerContainer
      height={props.height}
      width={props.width}
      borderRadius={props.borderRadius || "0px"}
      style={props.style}
    >
      <video
        autoPlay
        loop
        className={styles.video}
        muted
        style={style}
        onLoad={() => props.load_stat(true)}
        ref={video_ref}
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </BannerContainer>
  );
}
