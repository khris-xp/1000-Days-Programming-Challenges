import ArticleCollection from "../components/ArticleCollection";
import axios from "axios";
import { useQuery } from "react-query";
import { ArticleI } from "../interfaces/article";

const fetcher = async () => {
  const { data } = await axios.get("https://dev.to/api/articles");
  return data;
};

const Home = () => {
  const {
    data: articles,
    error,
    isError,
    isLoading,
  } = useQuery<ArticleI[], Error>("articles", fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="max-w-2xl mx-auto mt-4">
      <ArticleCollection collection={articles as ArticleI[]} />
    </div>
  );
};

export default Home;
