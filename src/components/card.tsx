import Image from "next/image";
import axios from "axios";
import { useQueryClient } from "react-query";

const Card = (props: any) => {
  const { data, handleDisplayLogin, isUserAuthenticated } = props;
  const queryClient = useQueryClient();

  const handleUpvote = async () => {
    if (!isUserAuthenticated) {
      handleDisplayLogin();
      return;
    }
    const token = localStorage.getItem("token");
    await axios.post(
      process.env.REACT_APP_BASE_URL + "/post/" + data._id + "/upvote",
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
  };

  return (
    <div className="item">
      <div>
        <div className="profileImage">
          <Image
            src={
              data.user.profileImage ||
              "https://xsgames.co/randomusers/avatar.php?g=male"
            }
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div>
        <div className="content">
          <div className="name">{data.user.name}</div>
          {data.content}
        </div>
        <div className="options">
          <div className="upvote" onClick={handleUpvote}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
              alt="upvote"
              height={16}
              width={16}
            />
            <span>{data.likes?.length || 0}</span>
          </div>
          <div className="upvote" onClick={handleReply}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
              alt="upvote"
              height={16}
              width={16}
            />
            <span>Reply</span>
          </div>
        </div>
        <div>
          {data.replies?.map((comment: any) => {
            return <Card data={comment} key={comment.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
