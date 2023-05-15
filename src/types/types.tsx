export type Story = {
  id: number;
  type: "story" | "job" | "comment" | "poll" | "pollopt";
  by: string;
  time: number;
  title: string;
  url: string;
};

export const navItems = [
  {
    text: "Top",
    path: "/",
    id: "nav-1",
  },
  {
    text: "New",
    path: "/new",
    id: "nav-2",
  },
  {
    text: "Best",
    path: "/best",
    id: "nav-3",
  },
  {
    text: "Jobs",
    path: "/jobs",
    id: "nav-4",
  },
] as const;

export const endpoints = {
  topStoryIds: "topstories",
  newStoryIds: "newstories",
  bestStoryIds: "beststories",
} as const;

export const storyKeys = {
  topStoryIds: "topStories",
  bestStoryIds: "bestStories",
  newStoryIds: "newStories",
} as const;
