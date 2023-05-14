import { Card, CardContent, Divider, Link, Typography } from "@mui/material";
import { Story } from "../types/articles";

export default function Article(props: Story) {
  return (
    <Card sx={{ boxShadow: "2", width: "100%" }}>
      <Link
        href={props.url}
        underline="none"
        target="_blank"
        rel="noopener"
        color="inherit"
      >
        <CardContent>
          <Typography
            variant="h1"
            sx={{
              fontSize: "1.25rem",
              fontWeight: "medium",
              color: "secondary",
              pb: ".5rem",
            }}
          >
            {props.title}
          </Typography>
          <Divider />
          <Typography variant="body2" sx={{ pt: ".5rem", color: "grey" }}>
            by{" "}
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", display: "inline" }}
            >
              {props.by}
            </Typography>
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
