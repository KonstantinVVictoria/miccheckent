import { Dispatch, ReactNode, SetStateAction } from "react";
import { Style } from "util";

export type BannerContainerProps = {
  children?: React.ReactNode;
  height: string;
  width: string;
  borderRadius?: string;
  style?: {
    [key: string]: string;
  };
};

export type ImageBannerProps = {
  children?: ReactNode;
  src: string;
} & BannerContainerProps;

export type VideoBannerProps = {
  children?: ReactNode;
  src: string;
  load_stat: Dispatch<SetStateAction<boolean>>;
} & BannerContainerProps;

export type TextBannerProps = {
  title?: string;
  description: string;
} & BannerContainerProps;
