import { Box, List, ListItem } from "@mui/material";
import { Story } from "../types/articles";
import Article from "./Article";

interface ArticleListProps {
  stories: Story[];
}

export default function ArticleList({ stories }: ArticleListProps) {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1200px",
      }}
    >
      {stories.map((story) => (
        <ListItem sx={{ width: { xs: "100%", lg: "80%" } }} key={story.id}>
          <Article {...story} />
        </ListItem>
      ))}
    </List>
  );
}
