# Mocking Network with MSW

This repository shows an example of mocking network responses using [msw](https://mswjs.io/).

It intercepts request made to `https://api.chucknorris.io/jokes/random` and returns an appropriate response (both success and failure).

> [!NOTE]
> Although this example shows `msw/node` in action, `msw` also works in browser via `msw/browser`