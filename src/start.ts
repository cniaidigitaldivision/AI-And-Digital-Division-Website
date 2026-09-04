// Imported directly from start-client-core rather than the "@tanstack/react-start"
// barrel: the barrel's re-export makes rolldown split createMiddleware into a chunk
// that circularly imports its own call site, leaving it undefined when
// createCsrfMiddleware runs. See TanStack/router#7459.
import { createStart, createMiddleware } from "@tanstack/start-client-core";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
