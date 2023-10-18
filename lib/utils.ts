import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validate = (value: unknown, maxLength: number): value is string =>
  !(!value || typeof value !== "string" || value.length > maxLength);
