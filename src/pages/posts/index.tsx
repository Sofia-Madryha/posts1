import "rc-pagination/assets/index.css";

import { fetchPosts } from "@/services";
import { PostList } from "@/components/PostList";

export async function getServerSideProps(context: any) {
  const page = context.query.page || 1;
  const res = await fetchPosts(page);

  console.log(res.data);
  return {
    props: {
      postsData: res.data,
      total: res.total,
    },
  };
}

export default function PostsPage({ postsData, total }: any) {
  return <PostList postsData={postsData} total={total} />;
}
