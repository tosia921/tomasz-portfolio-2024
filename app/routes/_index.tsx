import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/components";
import { getAllPosts } from "~/queries/blog-data";
import myPhoto from "../assets/images/MyPhoto-1.jpg";

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
    <>
      <section className="min-h-[calc(100vh-100px)] flex justify-center items-center px-16 py-32">
        <div className="flex flex-col items-center">
          <div className="rotate-[-3deg]">
            <h1 className="font-secondary text-4xl font-black leading-[0.8]">
              welcome! i'm <span className="text-secondary">Tomasz</span>
            </h1>
            <p className="font-secondary text-7xl font-black leading-[0.9]">and I make</p>
            <p className="font-secondary text-7xl font-black leading-[0.4]">websites</p>
          </div>
        </div>
      </section>
      <section className="px-16 flex flex-col items-center">
        <h2 className="font-secondary text-3xl font-black leading-[0.9] pb-40">Latest Posts</h2>
        <PostList posts={posts} />
      </section>
    </>
  );
}
