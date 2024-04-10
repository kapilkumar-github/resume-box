export const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/web`;
export const PAGE_PATH = {
  DASHBOARD: "/dashboard",
  SIGN_UP: "/signup",
};
export const DATA_TEMPLATE_REGEX = /({{{[a-zA-Z0-9]*}}})/;
export const DATA_TEMPLATE_KEY_REGEX = /\{\{\{(.+?)\}\}\}/;
