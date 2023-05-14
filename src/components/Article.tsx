import { Box, Divider, Typography } from "@mui/material";
import { Story } from "../types/articles";

export default function Article(props: Story) {
  return (
    <Box>
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="body1">{props.text}</Typography>
      <a href={props.url}>
        <Typography variant="body1">{props.url}</Typography>
      </a>
      <Divider />
      <Typography variant="body2">{props.by}</Typography>
    </Box>
  );
}
