import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { NextPage } from "next";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const Posts = () => {
  const { data, error, isError, isLoading }: any = useQuery(
    "posts",
    fetchPosts
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.messages}</div>;
  }

  return (
    <div className="text-center">
      <h1 className="text-lg font-bold">Posts</h1>
      {data.map((post: string, index: number) => {
        return (
          <li key={index}>
            {post.userId} . {post.title}
          </li>
        );
      })}
    </div>
  );
};

export default Posts;
