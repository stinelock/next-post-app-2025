import style from "./UserCard.module.css";
import Image from "next/image";

export default function UserCard({ user }) {
  return (
    <article className={style.usercard}>
      <Image
        src={user.image}
        alt={`${user.name}'s avatar`}
        className={style.userCardImage}
        width="300"
        height="200"
      />
      <h2 className={style.name}>{user.name}</h2>
      <p>{user.title}</p>
      <p className={style.mail}>{user.mail}</p>

    </article>
  );
}
