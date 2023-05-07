import Image from "next/image";

const Card = (props: any) => {
  const { data } = props;

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
          <div className="upvote">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
              alt="upvote"
              height={20}
              width={20}
            />
            <span>{data.likes?.length || 0}</span>
          </div>
          <div className="upvote">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
              alt="upvote"
              height={20}
              width={20}
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
