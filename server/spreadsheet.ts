import { Request, Response } from "express";
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { SHEETS_KEY, EMAIL, SHEET_ID } = require('./constants/sheet');

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || SHEET_ID);

export const sheetHandler = async (body: any, res: Response) => {

  try {

    await doc.useServiceAccountAuth({
      client_email: process.env.SERVICE_ACCOUNT_EMAIL || EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, '\n') || SHEETS_KEY.replace(/\\n/gm, '\n')
    });

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(body);

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}