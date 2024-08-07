import { http, HttpResponse } from "msw";

export const successHandlers = [
  // success case
  http.get("https://api.chucknorris.io/jokes/random", () => {
    return HttpResponse.json({
      categories: [],
      created_at: "2020-01-05 13:42:21.455187",
      icon_url: "https://api.chucknorris.io/img/avatar/chuck-norris.png",
      id: "uMRW17LNSgO0QbcLcgLunQ",
      updated_at: "2020-01-05 13:42:21.455187",
      url: "https://api.chucknorris.io/jokes/uMRW17LNSgO0QbcLcgLunQ",
      value:
        "Chuck Norris' wife didn't take his name after they were married. She took it after their engagement.",
    });
  }),
];
