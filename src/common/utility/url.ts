import { BASE_URL } from "../const";

export const getAbsoluteURL = (path: string, prefix = "") => {
  return `${BASE_URL}${prefix}${path}`;
};
