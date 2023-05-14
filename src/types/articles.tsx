export type Story = {
  id: number;
  type: "story" | "job" | "comment" | "poll" | "pollopt";
  by: string;
  time: number;
  title: string;
  url: string;
};
