import { Theme } from "./type.interface";

export interface Toast {
  text: string;
  type?: ToastType;
  delay?: number;
  icon?: string;
}

export type ToastType = Exclude<Theme, 'link'>