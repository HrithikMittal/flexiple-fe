"use client";

import { usePosts } from "@/hooks/usePosts";
import "./style.css";
import Card from "@/components/card";
import LoginDialog from "@/components/login-dialog";
import { useCallback, useEffect, useState } from "react";
import {
  ThemeProvider,
  TextareaAutosize,
  Button,
  createTheme,
  Skeleton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import axios from "axios";
import { useQueryClient } from "react-query";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a129fe",
    },
    secondary: {
      main: "#ff4500",
    },
  },
});
export default function Home() {
  const { data, isLoading } = usePosts();
  const [displayLogin, setDisplayLogin] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [displayReply, setDisplayReply] = useState(false);
  const [post, setPost] = useState("");
  const queryClient = useQueryClient();

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

  const handleActivatePost = () => {
    if (!isUserAuthenticated) {
      handleDisplayLogin();
      return;
    }
    setPost("");
    // smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setDisplayReply(!displayReply);
  };

  const handlePost = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      process.env.REACT_APP_BASE_URL + "/post",
      {
        content: post,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setPost("");
    setDisplayReply(false);
    queryClient.invalidateQueries("posts");
    // scroll to bottom
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        {!isLoading && (
          <Fab
            color="primary"
            className="floating-button"
            aria-label="add"
            onClick={handleActivatePost}
          >
            <AddIcon />
          </Fab>
        )}
        <LoginDialog
          displayLogin={displayLogin}
          handleDisplayLogin={handleDisplayLogin}
          authCheck={authCheck}
        />
        {displayReply && (
          <div className="reply post-reply">
            <TextareaAutosize
              minRows={5}
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handlePost}
              disabled={!post}
            >
              New Post
            </Button>
          </div>
        )}
        {isLoading &&
          new Array(10).fill(0).map((_i, index) => {
            return (
              <Skeleton
                key={index}
                variant="rectangular"
                width={"100%"}
                height={120}
                style={{ margin: "1rem 0rem" }}
              />
            );
          })}
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
    </ThemeProvider>
  );
}
