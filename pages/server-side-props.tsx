import { GetServerSideProps } from "next";
import React from "react";
import { IUser } from "../typing";
import Link from "next/link";

type props = {
  data: {
    users: IUser[];
  };
};

function SeverSideProps({ data }: props) {
  return (
    <ol>
      {data.users.map((user) => (
        <li key={user.id}>
          <Link href={`users/${user.id}`}>{user.username}</Link>
        </li>
      ))}
    </ol>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.API_BASE}`);
  const users: IUser[] = await res.json();

  return {
    props: {
      data: {
        users,
      },
    },
  };
};

export default SeverSideProps;
