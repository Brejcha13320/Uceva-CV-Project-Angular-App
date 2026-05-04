import { Theme } from "./type.interface";

export interface Toast {
  text: string;
  type?: ToastType;
  delay?: number;
}

export type ToastType = Exclude<Theme, 'link'>