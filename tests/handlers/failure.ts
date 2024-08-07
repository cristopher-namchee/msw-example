import { http, HttpResponse } from "msw";

export const failHandlers = [
  // error case
  http.get("https://api.chucknorris.io/jokes/random", () => {
    // let's say the server returns 500 now
    return HttpResponse.error();
  }),
];
