"use client";

import { usePosts } from "@/hooks/usePosts";
import "./style.css";
import Card from "@/components/card";
import LoginDialog from "@/components/login-dialog";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const { data } = usePosts();
  const [displayLogin, setDisplayLogin] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const authCheck = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  const handleDisplayLogin = () => {
    setDisplayLogin(!displayLogin);
  };

  return (
    <div className="container">
      <LoginDialog
        displayLogin={displayLogin}
        handleDisplayLogin={handleDisplayLogin}
        authCheck={authCheck}
      />
      {data.map((post: any) => {
        return (
          <Card
            key={post.id}
            data={post}
            handleDisplayLogin={handleDisplayLogin}
            isUserAuthenticated={isUserAuthenticated}
          />
        );
      })}
    </div>
  );
}
