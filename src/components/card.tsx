import Image from "next/image";

const Card = (props: any) => {
  const { data } = props;

  return (
    <div className="item">
      <div>
        <div className="profileImage">
          <Image
            src={"https://xsgames.co/randomusers/avatar.php?g=male"}
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div>
        <div className="content">
          <div className="name">Adhikansh Mittal</div>I absolutely didnt know
          that Maggi was actually directly targeting working women and mothers.
          Although, I remember their ads were focused on that messaging. But,
          still, never thoughts that they were so laser-focused on that
          demographic. Thanks for sharing! Looking forward to Part 2 :
        </div>
        <div className="options">
          <div className="upvote">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
              alt="upvote"
              height={20}
              width={20}
            />
            <span> 1</span>
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
          {data.comments?.map((comment: any) => {
            return <Card data={comment} key={comment.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
