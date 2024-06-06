"use client";

import styles from "./PostItem.module.scss";

export default function PostItem({ post }: any) {
  return (
    <div>
      <div className={styles.post}>
        <h2 className={styles.post__title}>{post.title}</h2>
        <p className={styles.post__text}>{post.body}</p>
      </div>
    </div>
  );
}
