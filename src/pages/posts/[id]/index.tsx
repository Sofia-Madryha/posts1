import Link from "next/link";
import { fetchPostById } from "@/services";
import { PostItem } from "@/components/PostItem";

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const post = await fetchPostById(id);
  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }: { post: any }) {
  console.log(post);

  return (
    <div>
      <Link href="/posts">Back to posts</Link>
      <PostItem post={post} />
    </div>
  );
}
