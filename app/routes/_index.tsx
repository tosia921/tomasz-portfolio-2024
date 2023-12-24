import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { PostList } from "~/components";
import { getAllPosts } from "~/queries/blog-data";
import myPhoto from "../assets/images/MyPhoto-1.jpg";
import ShopifyIcon from "~/icons/ShopifyIcon";
import ScotlandIcon from "~/icons/ScotlandIcon";
import LaptopIcon from "~/icons/LaptopIcon";
import EmailIcon from "~/icons/EmailIcon";
import GithubIcon from "~/icons/GithubIcon";
import LinkedinIcon from "~/icons/LinkedinIcon";
import HashnodeIcon from "~/icons/HashnodeIcon";
import BloggerIcon from "~/icons/BloggerIcon";
import TwitterIcon from "~/icons/TwitterIcon";
import ArrowdownIcon from "~/icons/ArrowdownIcon";

export const meta: MetaFunction = () => {
  return [
    { title: "RemixNode Blog" },
    {
      name: "description",
      content: "A blog front end using headless Hashnode and Remix!",
    },
  ];
};

type Post = {
  title: string;
  brief: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
  slug: string;
  subtitle: string;
  url: string;
  tags: string[];
};

type Posts = Post[];

export async function loader() {
  const posts = (await getAllPosts()) as Posts;
  return posts;
}
export default function Index() {
  const posts = useLoaderData();

  const handleClickScroll = (id: string) => {
    if (id) {
      const yOffset = -30;
      const element = document.getElementById(id);

      if (!element) return;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="min-h-[calc(100vh-70px)] flex flex-col gap-32 justify-center items-center px-16 py-32">
        <div className="flex items-center gap-24">
          <img
            className="rounded-full h-100 w-auto shadow-2xl"
            height="150"
            width="150"
            src={myPhoto}
            alt="Tomasz Posiadala"
          ></img>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r text-[60px] font-secondary font-black to-[#7fb2e2] from-tertiary  bg-clip-text text-[transparent]">
                Tomasz
              </span>
            </h1>
            <h2 className="text-xl font-bold pb-8">I'm a Front-end Developer</h2>
            <ul className="flex flex-col gap-4">
              <li className="text-sm flex items-center gap-4 ">
                <ShopifyIcon height={24} width={24} />
                Shopify and Remix JS enthusiast
              </li>
              <li className="text-sm flex items-center gap-4 ">
                <ScotlandIcon height={16} width={24} />
                Based in Scotland
              </li>
              <li className="text-sm flex items-center gap-4 ">
                <span>
                  <LaptopIcon height={24} width={24} />
                </span>
                <span>
                  Front-end Developer at{" "}
                  <Link to="https://www.idhlgroup.com/" target="_blank" rel="noreferrer">
                    IDHL
                  </Link>
                </span>
              </li>
              <li className="text-sm flex items-center gap-4 hover-up-effect">
                <Link to="https://denydevito.hashnode.dev/" target="_blank" rel="noreferrer" className="flex gap-4">
                  <BloggerIcon height={24} width={24} />
                  Amatour Tech Blogger
                </Link>
              </li>
              <li className="text-sm flex items-center gap-4 hover-up-effect">
                <a href="mailto:tomaszposiadala@gmail.com" className="flex gap-4">
                  <EmailIcon height={24} width={24} />
                  tomaszposiadala@gmail.com
                </a>
              </li>

              <ul className="flex pt-8 gap-8">
                <li className="hover-up-effect">
                  <Link to="https://github.com/tosia921" target="_blank" rel="noreferrer">
                    <GithubIcon height={50} width={50} />
                  </Link>
                </li>
                <li className="hover-up-effect">
                  <Link to="https://www.linkedin.com/in/tomasz-posiadala/" target="_blank" rel="noreferrer">
                    <LinkedinIcon height={50} width={50} />
                  </Link>
                </li>
                <li className="hover-up-effect">
                  <Link to="https://denydevito.hashnode.dev/" target="_blank" rel="noreferrer">
                    <HashnodeIcon height={50} width={53} />
                  </Link>
                </li>
                <li className="hover-up-effect">
                  <Link to="https://twitter.com/DenyDeevito" target="_blank" rel="noreferrer">
                    <TwitterIcon height={50} width={53} />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        {posts.length > 0 && (
          <button className="hover-down-effect cursor-pointer" onClick={() => handleClickScroll("blog-section")}>
            <ArrowdownIcon height={75} width={75} />
          </button>
        )}
      </section>
      <section id="blog-section" className="px-16 pb-50 flex flex-col items-center">
        <h2 className="font-secondary text-3xl font-black leading-[0.9] pb-40">Latest Posts</h2>
        <PostList posts={posts} />
      </section>
    </>
  );
}
