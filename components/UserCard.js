import style from "./UserCard.module.css";
import Image from "next/image";

export default function UserCard({ user }) {
  return (
    <div className={style.userCard}>
      <Image
        src={user.image}
        alt={`${user.name}'s avatar`}
        className={style.avatar}
        width="300"
        height="200"
      />
      <h2 className={style.name}>{user.name}</h2>
      <p className={style.email}>{user.email}</p>
    </div>
  );
}
