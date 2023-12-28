import { Link } from "@remix-run/react";
import { getFormattedDate } from "../utils";
import ExternalLinkIcon from "~/icons/ExternalLinkIcon";

export default function PostCard({ post }) {
  return (
    <div className="overflow-hidden relative col-span-full md:col-span-2 p-8 md:p-16 flex justify-center rounded-3xl items-center bg-gradient-to-t from-[#003482] to-[#1366a6]">
      <Link to={`${post.url}`}>
        <p className="text-xs md:text-sm text-secondary pb-5">{getFormattedDate(post.publishedAt)}</p>
        <div className=" absolute top-8 right-8">
          <ExternalLinkIcon height={15} width={15} />
        </div>
        <img alt="Blog cover" className="object-cover rounded-3xl w-full h-auto" src={post.coverImage.url} />
        <h3 className="pt-5 text-secondary text-md md:text-xl md:font-bold font-semibold">{post.title}</h3>
        <p className="pt-5 text-sm md:text-base text-secondary">{post.brief}</p>
      </Link>
    </div>
  );
}
