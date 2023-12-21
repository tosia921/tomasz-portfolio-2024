import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/components";
import { getAllPosts } from "~/queries/blog-data";

export const meta: MetaFunction = () => {
  return [
    { title: "RemixNode Blog" },
    {
      name: "description",
      content: "A blog front end using headless Hashnode and Remix!",
    },
  ];
};

export async function loader() {
  const posts = await getAllPosts();
  return posts;
}
export default function Index() {
  const posts = useLoaderData();
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}
