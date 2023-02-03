import { ReactElement } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface WindowInfo {
  title: string;
  icon: string;
  height: number;
  width: number;
  x: number;
  y: number;
  content: () => ReactElement;
}

export interface TitleBar {
  title: string;
  icon: string;
}