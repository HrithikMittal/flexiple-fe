"use client";

import { usePosts } from "@/hooks/usePosts";
import "./style.css";
import Card from "@/components/card";
import LoginDialog from "@/components/login-dialog";
import { useState } from "react";

export default function Home() {
  const { data } = usePosts();
  const [displayLogin, setDisplayLogin] = useState(true);

  const handleDisplayLogin = () => {
    setDisplayLogin(!displayLogin);
  };

  return (
    <div className="container">
      <LoginDialog
        displayLogin={displayLogin}
        handleDisplayLogin={handleDisplayLogin}
      />
      {[...data, ...data].map((post: any) => {
        return <Card key={post.id} data={post} />;
      })}
    </div>
  );
}
