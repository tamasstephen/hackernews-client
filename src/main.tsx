import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loadTopStories } from "./data/loaders/storyLoaders";

const queryClient: QueryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: loadTopStories(queryClient),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
