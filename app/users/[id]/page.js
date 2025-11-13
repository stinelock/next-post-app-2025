import PostCard from "@/components/PostCard";
import DeletePostButton from "@/components/DeletePostButton";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default async function UserPage({ params }) {
  const { id } = await params;
  const url = `${process.env.NEXT_PUBLIC_FB_DB_URL}/users/${id}.json`;
  const response = await fetch(url);
  const user = await response.json();

  const postsUrl = `${process.env.NEXT_PUBLIC_FB_DB_URL}/posts.json?orderBy="uid"&equalTo="${id}"`;
  const postsResponse = await fetch(postsUrl);
  const postsData = await postsResponse.json();

  const postsArray = postsData
    ? Object.keys(postsData).map((key) => ({ id: key, ...postsData[key] }))
    : [];

  return (
    <main className={styles.userPage}>
      <div className={styles.userinfo}>
        <Image
          className={styles.userimage}
          src={user.image}
          alt={user.name}
          width="300"
          height="400"
        />
        <h1>{user.name}</h1>
      </div>
      <section className={styles.userposts}>
        <h2>Posts by {user.name}</h2>
        <div className={styles.postgrid}>
          {postsArray.length === 0 && <p>No posts found.</p>}
          {postsArray.map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className={styles.postitem}
            >
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
