import { useQuery } from "@tanstack/react-query";
import { useAdmin } from "@/lib/adminContext";

export const DEFAULT_BOOKING_URL =
  "https://flux.healthcare/schedule/mula-fysio";
export const BOOKING_URL_KEY = "booking.externalUrl";

export function isValidBookingUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !!url.hostname && !url.username && !url.password && value.length <= 2048;
  } catch {
    return false;
  }
}

export function useBookingUrl(): string {
  const { pendingEdits } = useAdmin();
  const { data: content } = useQuery<Array<{ key: string; valueNl: string }>>({
    queryKey: ["/api/content"],
  });
  const saved = content?.find((item) => item.key === BOOKING_URL_KEY)?.valueNl;
  const candidate = pendingEdits[BOOKING_URL_KEY]?.valueNl || saved;
  return candidate && isValidBookingUrl(candidate) ? candidate : DEFAULT_BOOKING_URL;
}