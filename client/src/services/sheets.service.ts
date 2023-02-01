import { SHEET_ID } from '../../../server/constants/sheet';

declare global {
  interface Window {
    gapi?: any;
    showEvents?: any;
  }
}

export const submitMatchData = async () => {
  try {
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
