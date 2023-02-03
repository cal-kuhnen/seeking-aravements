export const postMatchData = async (data: any) => {
  try {
    const response = await fetch("/api/submit", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return await response;
  } catch (err) {
    console.error(err);
  }
}
