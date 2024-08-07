export async function getBadJokes(): Promise<string> {
  try {
    const result = await fetch(`https://api.chucknorris.io/jokes/random`);
    const body = await result.json();

    return body.value;
  } catch (err) {
    console.log("error from server");

    return "";
  }
}
