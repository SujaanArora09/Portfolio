/**
 * Utility function to conditionally combine class names.
 * @param classes - An array of class names or conditions.
 * @returns A string of combined class names.
 */
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// export function cn(...classes: (string | boolean | undefined | null)[]): string {
//   return classes.filter(Boolean).join(' ');
// }
