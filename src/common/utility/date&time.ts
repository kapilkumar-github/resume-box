import { error } from "console";

export const stringToDate = (
  dateString?: string,
  options: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" }
) => {
  const date = new Date(dateString || "");
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
};
