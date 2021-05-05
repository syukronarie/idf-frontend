import { GoogleSpreadsheet } from "google-spreadsheet";

export const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
export const SHEET_ID = process.env.SHEET_ID;
export const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
export const PRIVATE_KEY = process.env.PRIVATE_KEY;

export const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
