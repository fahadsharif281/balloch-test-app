import { IWebContentApiResult } from "../models/IWebContentReducer";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ENDPOINTS = {
  GETACTIVECOMPAIGN: "getActiveCompaign",
  GETSUCCESSCOMPAIGN: "getSuccessfullCompaign",
  CREATEDONATION: "createDonation",
  CURRENCY: "currency",
};

export const sorting = (a: any, b: any) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const findExactSection = (
  webContentResult: IWebContentApiResult[],
  type: string,
  value: string
) => {
  if (webContentResult) {
    const flagged = webContentResult?.find(
      (item: any) => item[type].toString() === value.toString()
    );
    return flagged;
  }
  return null;
};

export const isImageURL = (url: string) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};

export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export { BASE_URL, ENDPOINTS };
