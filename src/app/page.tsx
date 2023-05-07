"use client";

import { usePosts } from "@/hooks/usePosts";
import "./style.css";
import Card from "@/components/card";
import Login from "@/components/login";

export default function Home() {
  const { data } = usePosts();

  return (
    <div className="container">
      <Login />
      {[...data, ...data].map((post: any) => {
        return <Card key={post.id} data={post} />;
      })}
    </div>
  );
}
