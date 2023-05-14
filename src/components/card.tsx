import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useQueryClient } from "react-query";
import { Button, TextareaAutosize } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import {
  content,
  item,
  name,
  optionItem,
  profileImage,
  replyItem,
} from "./style";

const Card = (props: any) => {
  const { data, handleDisplayLogin, isUserAuthenticated } = props;
  const queryClient = useQueryClient();
  const [displayReply, setDisplayReply] = useState(false);
  const [reply, setReply] = useState("");
  const [displayDelete, setDisplayDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.id === data.user._id) {
      setDisplayDelete(true);
    }
  }, [data.user._id]);

  const handleUpvote = async () => {
    if (!isUserAuthenticated) {
      handleDisplayLogin();
      return;
    }
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    await axios.post(
      process.env.REACT_APP_BASE_URL +
        "/post/" +
        data._id +
        (data.likes.indexOf(user.id) > -1 ? "/downvote" : "/upvote"),
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    queryClient.invalidateQueries("posts");
  };

  const handleReply = () => {
    if (!isUserAuthenticated) {
      handleDisplayLogin();
      return;
    }
    setDisplayReply(!displayReply);
  };

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    let body: any = {
      content: reply,
    };
    if (data.parentId) {
      body = {
        ...body,
        parentId: data.parentId,
        replyTo: data._id,
      };
    } else {
      body = {
        ...body,
        parentId: data._id,
      };
    }

    await axios.post(process.env.REACT_APP_BASE_URL + "/post", body, {
      headers: {
        Authorization: token,
      },
    });
    setReply("");
    setDisplayReply(false);
    queryClient.invalidateQueries("posts");
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token");
    axios
      .delete(process.env.REACT_APP_BASE_URL + "/post/" + data._id, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        queryClient.invalidateQueries("posts");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
    // const token = localStorage.getItem("token");
    // axios
    //   .put(
    //     process.env.REACT_APP_BASE_URL + "/post/" + data._id,
    //     {
    //       content: data.content,
    //     },
    //     {
    //       headers: {
    //         Authorization: token,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     queryClient.invalidateQueries("posts");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className={item}>
      <div>
        <div className={profileImage}>
          <Image
            src={
              data.user.profileImage ||
              "https://xsgames.co/randomusers/assets/avatars/male/" +
                (Math.floor(Math.random() * 78) + 1) +
                ".jpg"
            }
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div>
        <div className={content}>
          {isEditing ? (
            <>
              <textarea />
            </>
          ) : (
            <>
              <div className={name}>{data.user.name}</div>
              {data.content}
            </>
          )}
        </div>
        <div className="options">
          <div className={optionItem} onClick={handleUpvote}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
              alt="upvote"
              height={16}
              width={16}
            />
            <span>{data.likes?.length || 0}</span>
          </div>
          <div className={optionItem} onClick={handleReply}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
              alt="upvote"
              height={16}
              width={16}
            />
            <span>Reply</span>
          </div>
          {displayDelete && (
            <div className={optionItem} onClick={handleDelete}>
              <DeleteIcon
                style={{
                  fontSize: 18,
                }}
              />
              <span>Delete</span>
            </div>
          )}
          {displayDelete && (
            <div className={optionItem} onClick={handleEdit}>
              <Edit />
              <span>Edit</span>
            </div>
          )}
        </div>
        <div>
          {displayReply && (
            <div className={replyItem}>
              <TextareaAutosize
                minRows={5}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendReply}
                disabled={!reply}
              >
                Reply
              </Button>
            </div>
          )}
          {data.replies?.map((comment: any) => {
            return (
              <Card
                data={comment}
                key={comment.id}
                handleDisplayLogin={handleDisplayLogin}
                isUserAuthenticated={isUserAuthenticated}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
