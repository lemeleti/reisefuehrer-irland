import { ReactNode } from "react";

export type CarouselProps = {
  slides: string[];
  path?: string;
  className?: string;
  children?: ReactNode;
}