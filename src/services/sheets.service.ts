export const temp = 0;
import { SHEETS_KEY, SHEET_ID, EMAIL } from '../constants/sheet';

const submitMatchData = async (id: string) => {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    //update this token with yours. 
    Authorization: `Bearer ${SHEETS_KEY}`,
  },
  body: JSON.stringify({

    "requests": [
      {
        "updateCells": {
          "range": {
            "startRowIndex": 0,
            "startColumnIndex": 0,
            "endColumnIndex": 1,
            "endRowIndex": 3,
            "sheetId": 0
          },
          " ": [
            {
              "values": [
                {
                  "userEnteredValue": {
                    "stringValue": "Adnan1"
                  }
                }
              ]
            },
            {
              "values": [
                {
                  "userEnteredValue": {
                    "stringValue": "Adnan2"
                  }
                }
              ]
            },
            {
              "values": [
                {
                  "userEnteredValue": {
                    "stringValue": "Adnan3"
                  }
                }
              ]
            }
          ],
          "fields": "*"
        }
      }
    ]

  })
})
}
