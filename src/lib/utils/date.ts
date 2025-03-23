import { formatDistanceToNow, parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

export const getDateDistance = (date: string) =>
  formatDistanceToNow(parseISO(date), {
    addSuffix: true,
    locale: pt
  });

export const formatDate = (
  date: string,
  formatDate: "long" | "short" = "long"
) => {
  const parseDate = parseISO(date);
  if (formatDate === "short") {
    return format(parseDate, "MMMM dd, yyyy zz", { locale: pt });
  }

  return format(parseDate, "EEEE, MMMM d, yyyy h:mm a zz", { locale: pt });
};
