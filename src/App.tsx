import {
  QueryClient,
  QueryFunction,
  QueryKey,
  useQuery,
} from "@tanstack/react-query";
import { getTopStories } from "./dataHandlers/getTopStories";

const topStoriesQuery = {
  queryKey: ["topStories"],
  queryFn: getTopStories,
};

export function loadTopStories(queryClient: QueryClient) {
  return async function () {
    return (
      queryClient.getQueryData(topStoriesQuery.queryKey) ??
      (await queryClient.fetchQuery(topStoriesQuery))
    );
  };
}

function App() {
  const { data: topStories, isLoading, isError } = useQuery(topStoriesQuery);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Failed to load top stories</p>;
  }

  return (
    <>
      <p>Is Loaded</p>
    </>
  );
}

export default App;
