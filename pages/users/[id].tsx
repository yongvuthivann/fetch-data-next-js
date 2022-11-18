import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { IUser } from "../../typing";

type props = {
  user: IUser;
};

function User({ user }: props) {
  return (
    <div>
      <h1>{user?.username} Detail</h1>
    </div>
  );
}

export default User;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_BASE}`);
  const users: IUser[] = await res.json();
  const paths = users.map((user) => ({
    params: {
      id: user.id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.API_BASE}/${params?.id}`);
  const user = await res.json();

  if (user?.statusCode === 500) {
    return {
      notFound: true,
    };
  }

  if (user?.statusCode === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
    revalidate: 60,
  };
};
