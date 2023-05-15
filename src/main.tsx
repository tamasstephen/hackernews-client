import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index.tsx";
import NavBar from "./components/Navigation/NavBar.tsx";
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
        element: <Index storyIdKey="topStoryIds" title="Top Stories" />,
        loader: loadTopStories(queryClient),
      },
      {
        path: "/new",
        element: <Index storyIdKey="newStoryIds" title="New Stories" />,
        loader: loadTopStories(queryClient, "newStoryIds"),
      },
      {
        path: "/best",
        element: <Index storyIdKey="bestStoryIds" title="Best Stories" />,
        loader: loadTopStories(queryClient, "bestStoryIds"),
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
