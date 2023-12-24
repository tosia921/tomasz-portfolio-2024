import { Link } from "@remix-run/react";
import { getFormattedDate } from "../utils";

export default function PostCard({ post }) {
  return (
    <div className="overflow-hidden">
      <Link to={`${post.url}`}>
        <img alt="Blog cover" className="object-cover w-full h-auto" src={post.coverImage.url} />
        <h3 className="text-xl font-black px-4 pt-4">{post.title}</h3>
        <p className="text-gray-500 text-xs px-4 pt-2">Posted on {getFormattedDate(post.publishedAt)}</p>
        <p className="mt-2 text-gray-700 p-4">{post.brief}</p>
      </Link>
    </div>
  );
}
