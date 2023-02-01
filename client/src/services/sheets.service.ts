import { SHEET_ID } from '../constants/sheet';

declare global {
  interface Window {
    gapi?: any;
    showEvents?: any;
  }
}

export const submitMatchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/api");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
