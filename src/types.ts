import { ReactNode, CSSProperties } from "react";

export interface IBaseComponentProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
