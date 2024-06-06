import { useState } from "react";
import { useRouter } from "next/navigation";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import styles from "./PostList.module.scss";

export default function PostList({ postsData, total }: any) {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(10);

  const updatePage = (p: number) => {
    setPage(p);
    router.push(`/posts?page=${p}`);
  };

  return (
    <div className={styles.data}>
      <h1 className={styles.data__title}>Posts</h1>
      <div className={styles.data__posts}>
        {postsData?.map((post: any) => (
          <div
            className={styles["data__posts-item"]}
            key={post.id}
            onClick={() => router.push(`/posts/${post.id}`)}
          >
            <h2 className={styles["data__posts-item-title"]}>{post.title}</h2>
            <p className={styles["data__posts-item-text"]}>{post.body}</p>
          </div>
        ))}
      </div>

      <Pagination
        pageSize={postsPerPage}
        onChange={updatePage}
        current={page}
        total={total}
      />
    </div>
  );
}
