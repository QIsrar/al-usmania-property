import { WHATSAPP_BASE, BUSINESS } from "./constants";

/**
 * Format a price in PKR with commas and optional lakh/crore shorthand
 */
export function formatPrice(price: number, short = false): string {
  if (short) {
    if (price >= 10000000) {
      const crore = price / 10000000;
      return `PKR ${crore % 1 === 0 ? crore : crore.toFixed(1)} Crore`;
    }
    if (price >= 100000) {
      const lakh = price / 100000;
      return `PKR ${lakh % 1 === 0 ? lakh : lakh.toFixed(1)} Lakh`;
    }
  }
  return `PKR ${price.toLocaleString("en-PK")}`;
}

/**
 * Format rent price (monthly)
 */
export function formatRentPrice(price: number): string {
  return `PKR ${price.toLocaleString("en-PK")}/mo`;
}

/**
 * Generate a WhatsApp deep link with pre-filled message
 */
export function whatsappLink(
  message: string,
  phone: string = BUSINESS.whatsapp.primary
): string {
  return `${WHATSAPP_BASE}/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a tel: link
 */
export function phoneLink(phone: string = BUSINESS.phone.primaryClean): string {
  return `tel:${phone}`;
}

/**
 * Generate a Google Maps embed URL
 */
export function googleMapsEmbed(lat: number, lng: number, zoom = 15): string {
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2spk!4v1!5m2!1sen!2spk&zoom=${zoom}`;
}

/**
 * Generate a static Google Maps link
 */
export function googleMapsLink(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

/**
 * Capitalize first letter of each word
 */
export function capitalize(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Get relative time string (e.g., "3 days ago")
 */
export function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

/**
 * Cn utility for merging class names
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
