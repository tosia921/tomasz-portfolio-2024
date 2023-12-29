import { Link, useLoaderData } from "@remix-run/react";
import { getAllPosts } from "~/queries/blog-data";
import myPhoto from "../assets/images/MyPhoto-1.jpg";
import hashnodeLogo from "../assets/images/hashnode.png";
import ShopifyIcon from "~/icons/ShopifyIcon";
import ScotlandIcon from "~/icons/ScotlandIcon";
import LaptopIcon from "~/icons/LaptopIcon";
import EmailIcon from "~/icons/EmailIcon";
import GithubIcon from "~/icons/GithubIcon";
import LinkedinIcon from "~/icons/LinkedinIcon";
import BloggerIcon from "~/icons/BloggerIcon";
import ArrowdownIcon from "~/icons/ArrowdownIcon";
import ExternalLinkIcon from "~/icons/ExternalLinkIcon";
import PostCard from "~/components/PostCard";
import codingGif from "../assets/images/coding-gif.gif";
import polygon3 from "../assets/images/symbol-scatter-haikei-1.png";

export const meta = () => {
  return [
    { title: "Tomasz Posiadala" },
    {
      name: "description",
      content: "Tomasz Posiadala - Front-end Developer Portfolio, Blog and more",
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

  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
        <div className="col-span-full md:col-start-1 relative overflow-hidden md:col-end-4 md:row-span-2 bg-[#7153a1] rounded-3xl p-16 shadow-md">
          <div aria-hidden="true" className="top-0 left-0 w-full h-full object-cover hidden md:block absolute ">
            <svg
              id="visual"
              viewBox="0 0 900 600"
              className="w-full h-[110%] object-cover"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(900, 600)">
                <path
                  d="M-459.7 0C-460.6 -52.4 -461.5 -104.7 -437.2 -142.1C-412.9 -179.4 -363.3 -201.8 -335.7 -243.9C-308.2 -286.1 -302.7 -348.1 -269.2 -370.5C-235.7 -393 -174.4 -375.9 -124.8 -384.2C-75.3 -392.5 -37.7 -426.1 0 -459.7L0 0Z"
                  fill="#4a2c7a"
                ></path>
              </g>
            </svg>
          </div>
          <h1 className="relative z-10 pb-16 gap-0 flex flex-col md:gap-0">
            <span className="font-black md:text-5xl lg:text-7xl lg:font-black md:font-black font-secondary text-secondary text-3xl">
              Tomasz
            </span>
            <span className="font-black md:text-5xl lg:text-7xl lg:font-black md:font-black font-secondary text-secondary text-3xl">
              Posiadala
            </span>
          </h1>
          <ul className="flex relative z-10 flex-col gap-4">
            <li className="text-sm md:text-base text-secondary flex items-center gap-4 ">
              <div className="hidden md:block">
                <ShopifyIcon height={30} width={30} />
              </div>
              <div className="md:hidden">
                <ShopifyIcon height={24} width={24} />
              </div>
              Shopify and Remix JS enthusiast
            </li>
            <li className="text-sm md:text-base text-secondary flex items-center gap-4 ">
              <div className="hidden md:block">
                <ScotlandIcon height={30} width={30} />
              </div>
              <div className="md:hidden">
                <ScotlandIcon height={24} width={24} />
              </div>
              Based in Scotland
            </li>
            <li className="text-sm md:text-base flex items-center gap-4 ">
              <span>
                <div className="hidden md:block">
                  <LaptopIcon height={30} width={30} />
                </div>
                <div className="md:hidden">
                  <LaptopIcon height={24} width={24} />
                </div>
              </span>
              <span className="text-secondary">
                Front-end Developer at{" "}
                <Link
                  className="text-secondary items-center cursor-pointer"
                  to="https://www.idhlgroup.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IDHL
                </Link>
              </span>
            </li>
            <li className="text-sm md:text-base cursor-pointer text-secondary flex items-center gap-4">
              <Link
                to="https://denydevito.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-secondary"
              >
                <div className="hidden md:block">
                  <BloggerIcon height={30} width={30} />
                </div>
                <div className="md:hidden">
                  <BloggerIcon height={24} width={24} />
                </div>
                Amatour Tech Blogger
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-start-4 md:col-end-5 bg">
          <img src={myPhoto} alt="Tomasz Posiadala" className="rounded-3xl shadow-md w-full h-auto" />
        </div>
        <a
          href="mailto:tomaszposiadala@gmail.com"
          className="col-span-1 flex justify-center  md:col-start-4 md:col-end-5 aspect-square rounded-3xl items-center bg-[#e97f77]"
        >
          <EmailIcon height={75} width={75} />
        </a>
        <Link
          to="https://www.linkedin.com/in/tomasz-posiadala/"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer col-span-1 aspect-square relative flex justify-center items-center rounded-3xl bg-[#2A7AB9]"
        >
          <LinkedinIcon height={75} width={75} />
          <div className=" absolute top-8 right-8">
            <ExternalLinkIcon height={15} width={15} />
          </div>
        </Link>
        <Link
          to="https://github.com/tosia921"
          target="_blank"
          rel="noreferrer"
          className="col-span-1 relative cursor-pointer flex justify-center rounded-3xl items-center bg-[#000000]"
        >
          <GithubIcon height={75} width={75} />
          <div className=" absolute top-8 right-8">
            <ExternalLinkIcon height={15} width={15} />
          </div>
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://denydevito.hashnode.dev"
          className="col-span-full px-16 py-20 cursor-pointer md:col-start-3 md:col-end-5 flex relative justify-center rounded-3xl items-center bg-[#00B3EB]"
        >
          <img src={hashnodeLogo} alt="Tomasz Posiadala" className="max-w-[75%] md:max-w-[50%]" />
          <div className=" absolute top-8 right-8">
            <ExternalLinkIcon height={15} width={15} />
          </div>
        </Link>
        <div className="col-span-full flex  md:col-start-3 md:col-end-5 relative justify-center overflow-hidden rounded-3xl items-center">
          <img src={codingGif} alt="Person coding in front of a computer" className="w-full h-auto" />
          <div className=" absolute top-8 right-8">
            <ExternalLinkIcon height={15} width={15} />
          </div>
        </div>
        <div className="col-span-full relative  md:col-start-1 flex-col md:col-end-3 md:row-start-4  px-16 py-20 flex justify-center rounded-3xl items-center bg-gradient-to-t from-[#003482] to-[#1368a9]">
          <h2 className="text-secondary md:text-2xl md:font-black uppercase font-secondary text-center text-xl pb-5 font-black">
            Latest blog posts
          </h2>
          <img
            src={polygon3}
            aria-hidden="true"
            className="absolute opacity-10 top-0 left-0 w-full h-full object-cover"
          />
          <div className="md:hidden">
            <ArrowdownIcon height={25} width={25} />
          </div>
          <div className="hidden md:block">
            <ArrowdownIcon height={50} width={50} />
          </div>
        </div>
        {posts.length > 0 && posts.map((post) => <PostCard key={post?.node?.slug} post={post?.node} />)}
      </section>
    </>
  );
}
