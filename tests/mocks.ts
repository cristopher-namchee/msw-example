import { setupServer } from "msw/node"; // or 'browser' if running for DOM env
import { successHandlers } from "./handlers/success";

// instatiate the server with mock handlers
export const server = setupServer(...successHandlers);
