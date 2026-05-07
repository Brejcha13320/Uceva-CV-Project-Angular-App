import { Theme } from "./type.interface";

export type BadgeType = Exclude<Theme, 'link'>;