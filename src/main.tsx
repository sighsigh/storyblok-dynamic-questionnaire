import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import { Question } from "./pages/Question";

import "@fontsource/inter";
import { CssBaseline } from "@mui/joy";
import ApiProvider from "@providers/ApiProvider";
import { SimplePage } from "./pages/SimplePage";
import { Homepage } from "./pages/Homepage";

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/questionnaire/start",
    element: (
      <SimplePage storyblokSlug="questionnaire/start" buttonText="Next" />
    ),
  },
  {
    path: "/questionnaire/:id",
    element: <Question />,
  },
  {
    path: "/questionnaire/thank-you",
    element: <SimplePage storyblokSlug="questionnaire/thank-you" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ApiProvider>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);
