import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getStoryIdsQuery, getTopStoriesQuery } from "./data/queries/queries";
import ArticleList from "./components/ArticleList";
import { Alert, CircularProgress, Grid, Pagination } from "@mui/material";
import { endpoints } from "./types/types";

function Index({ storyIdKey }: { storyIdKey: keyof typeof endpoints }) {
  const {
    data: topStoryIdArray,
    isLoading,
    isError,
  } = useQuery(getStoryIdsQuery(storyIdKey));
  const [page, setPage] = useState<number>(1);
  const {
    data: stories,
    isLoading: isLoadingStories,
    isError: isErrorStories,
  } = useQuery({
    ...getTopStoriesQuery(page, topStoryIdArray ?? []),
  });

  useEffect(() => {
    setPage(1);
  }, [storyIdKey]);

  function handlePagination(_event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    window.scrollTo(0, 0);
  }

  if (isLoading || isLoadingStories) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <CircularProgress />;
      </Grid>
    );
  }

  if (isError || isErrorStories) {
    return <Alert severity="warning">Failed to load stories!</Alert>;
  }

  return (
    <>
      <ArticleList stories={stories ?? []} />
      <Pagination
        sx={{ mt: 4 }}
        count={
          topStoryIdArray.length % 10 === 0
            ? topStoryIdArray.length / 10
            : topStoryIdArray.length / 10 + 1
        }
        page={page}
        onChange={handlePagination}
      />
    </>
  );
}

export default Index;
