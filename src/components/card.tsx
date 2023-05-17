import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, TextareaAutosize } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import {
  content,
  item,
  name,
  optionItem,
  options,
  profileImage,
  replyItem,
} from "./style";
import { useEditPost } from "@/hooks/usePosts";
import { getItem } from "@/utils/localstorage";

const Card = (props: any) => {
  const { data, handleDisplayLogin, isUserAuthenticated } = props;

  const editMutation = useEditPost();

  const [displayReply, setDisplayReply] = useState(false);
  const [reply, setReply] = useState("");
  const [displayDelete, setDisplayDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(data.content);

  useEffect(() => {
    const user = getItem("user");
    if (user?.id === data.user._id) {
      setDisplayDelete(true);
    }
  }, [data.user._id]);

  const handleUpvote = async () => {
    if (!isUserAuthenticated) {
      handleDisplayLogin();
      return;
    }
    const user = getItem("user");
    editMutation.mutate({
      method: "POST",
      path:
        data._id + (data.likes.indexOf(user.id) > -1 ? "/downvote" : "/upvote"),
      body: null,
    });
  };

  const handleReply = () => {
    if (!isUserAuthenticated) {
      handleDisplayLogin();
      return;
    }
    setDisplayReply(!displayReply);
  };

  const handleSendReply = async () => {
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
    editMutation.mutate({
      method: "POST",
      path: "",
      body: body,
    });
    setReply("");
    setDisplayReply(false);
  };

  const handleDelete = () => {
    editMutation.mutate({
      method: "DELETE",
      path: data._id,
      body: null,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditPost = async () => {
    editMutation.mutate({
      method: "PUT",
      path: data._id,
      body: {
        content: editContent,
      },
    });
    setIsEditing(false);
  };

  return (
    <div className={item}>
      <div>
        <div className={profileImage}>
          <Image
            src={
              data.user.profileImage ||
              "https://xsgames.co/randomusers/assets/avatars/male/6.jpg"
            }
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        {isEditing ? (
          <div className={replyItem}>
            <textarea
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
            />
          </div>
        ) : (
          <div className={content}>
            <div className={name}>{data.user.name}</div>
            {data.content}
          </div>
        )}

        <div className={options}>
          {isEditing ? (
            <>
              <Button
                variant="text"
                color="error"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button variant="text" onClick={handleEditPost}>
                Save
              </Button>
            </>
          ) : (
            <>
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
                  <Edit
                    style={{
                      fontSize: 18,
                    }}
                  />
                  <span>Edit</span>
                </div>
              )}
            </>
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
