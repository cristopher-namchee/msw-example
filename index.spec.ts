import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

import { server } from "./tests/mocks";

import { getBadJokes } from ".";
import { failHandlers } from "./tests/handlers/failure";

describe("getBadJokes", () => {
  beforeAll(() => {
    // create the server and intercept requests
    server.listen();
  });

  afterEach(() => {
    // reset all handlers
    server.resetHandlers();
  });

  afterAll(() => {
    // close the server
    server.close();
  });

  it("should return a (definitely) overused jokes", async () => {
    const result = await getBadJokes();

    expect(result).toBe(
      "Chuck Norris' wife didn't take his name after they were married. She took it after their engagement."
    );
  });

  it("should return an empty string due to error", async () => {
    server.use(...failHandlers);

    const result = await getBadJokes();

    expect(result).toBe("");
  });
});
