import { Link } from "@remix-run/react";
import { getFormattedDate } from "../utils";
import ExternalLinkIcon from "~/icons/ExternalLinkIcon";
import Polygon from "~/assets/images/symbol-scatter-haikei-1.png";

export default function PostCard({ post }) {
  return (
    <div className="overflow-hidden relative col-span-full md:col-span-2 p-8 md:p-16 flex justify-center rounded-3xl items-center bg-gradient-to-t from-[#003482] to-[#1368a9]">
      <img src={Polygon} aria-hidden="true" className="absolute opacity-10 top-0 left-0 w-full h-full object-cover" />
      <Link to={`${post.url}`} className="z-10 relative">
        <p className="text-xs md:text-sm text-secondary pb-5">{getFormattedDate(post.publishedAt)}</p>
        <div className=" absolute top-0 right-0">
          <ExternalLinkIcon height={15} width={15} />
        </div>
        <img alt="Blog cover" className="object-cover rounded-3xl w-full h-auto" src={post.coverImage.url} />
        <h3 className="pt-5 text-secondary text-md md:text-xl md:font-bold font-semibold">{post.title}</h3>
        <p className="pt-5 text-sm md:text-base text-secondary">{post.brief}</p>
      </Link>
    </div>
  );
}
