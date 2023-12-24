import { Link } from "@remix-run/react";
import { PostCard } from ".";
import HashnodeIcon from "~/icons/HashnodeIcon";

export default function PostList({ posts }) {
  return (
    <>
      {posts.length > 0 && (
        <div className="py-16">
          <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post?.node?.slug} post={post?.node} />
            ))}
          </div>
        </div>
      )}
      <Link
        to="https://denydevito.hashnode.dev/"
        target="_blank"
        rel="noreferrer"
        className="uppercase pt-20 flex items-center font-bold "
      >
        <span className="pr-4">
          <HashnodeIcon height={20} width={20} />
        </span>
        <span className="text-md font-bold">Visit my Blog</span>
      </Link>
    </>
  );
}
