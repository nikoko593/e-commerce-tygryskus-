import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


/**
 * 
 * @param {*} value Number to be converted to currency
 * @param {"code" | "symbol" | "narrowSymbol"} currencyDisplay 
 * @returns 
 */
export const convertToCurrency = (value, currencyDisplay = "symbol") => {
  let newValue = value;
  if (value === undefined || value === null || value === "") {
    newValue = new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      currencyDisplay: currencyDisplay,
    }).format(0);
  } else{
    newValue = new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      currencyDisplay: currencyDisplay,
    }).format(value);
  }
  return newValue.replace("₱", "₱ "); // Add space after the currency symbol
}