const data = [
  {
    id: 12,
    name: "Adhikansh Mittal",
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    likes: 0,
    data: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugiat quos harum quo alias ut tempore adipisci consectetur hic excepturi. At in sit, tempore eligendi ratione nobis iusto voluptates similique iure atque voluptatibus dignissimos ea, dolorem nisi. Perspiciatis facilis molestiae atque illo cum neque tenetur accusantium possimus tempore dignissimos ipsam cupiditate quae odit veniam maiores, commodi ut officia doloremque explicabo fuga optio harum corporis. Voluptatem enim et repellat, quis neque officia sunt nesciunt reprehenderit aperiam animi. Voluptatem temporibus nihil adipisci veniam vitae nulla, numquam, voluptatum, qui quos molestiae omnis? Corporis nam fuga maiores odit error doloribus rem, reprehenderit perferendis corrupti.`,
    comments: [
      {
        id: 12,
        name: "Adhikansh Mittal",
        image: "https://xsgames.co/randomusers/avatar.php?g=male",
        likes: 0,
        data: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugiat quos harum quo alias ut tempore adipisci consectetur hic excepturi. At in sit, tempore eligendi ratione nobis iusto voluptates similique iure atque voluptatibus dignissimos ea, dolorem nisi. Perspiciatis facilis molestiae atque illo cum neque tenetur accusantium possimus tempore dignissimos ipsam cupiditate quae odit veniam maiores, commodi ut officia doloremque explicabo fuga optio harum corporis. Voluptatem enim et repellat, quis neque officia sunt nesciunt reprehenderit aperiam animi. Voluptatem temporibus nihil adipisci veniam vitae nulla, numquam, voluptatum, qui quos molestiae omnis? Corporis nam fuga maiores odit error doloribus rem, reprehenderit perferendis corrupti.`,
        comments: [{}, {}, {}, {}, {}],
      },
      {},
      {},
      {
        id: 12,
        name: "Adhikansh Mittal",
        image: "https://xsgames.co/randomusers/avatar.php?g=male",
        likes: 0,
        data: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugiat quos harum quo alias ut tempore adipisci consectetur hic excepturi. At in sit, tempore eligendi ratione nobis iusto voluptates similique iure atque voluptatibus dignissimos ea, dolorem nisi. Perspiciatis facilis molestiae atque illo cum neque tenetur accusantium possimus tempore dignissimos ipsam cupiditate quae odit veniam maiores, commodi ut officia doloremque explicabo fuga optio harum corporis. Voluptatem enim et repellat, quis neque officia sunt nesciunt reprehenderit aperiam animi. Voluptatem temporibus nihil adipisci veniam vitae nulla, numquam, voluptatum, qui quos molestiae omnis? Corporis nam fuga maiores odit error doloribus rem, reprehenderit perferendis corrupti.`,
        comments: [
          {},
          {},
          {
            id: 12,
            name: "Adhikansh Mittal",
            image: "https://xsgames.co/randomusers/avatar.php?g=male",
            likes: 0,
            data: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugiat quos harum quo alias ut tempore adipisci consectetur hic excepturi. At in sit, tempore eligendi ratione nobis iusto voluptates similique iure atque voluptatibus dignissimos ea, dolorem nisi. Perspiciatis facilis molestiae atque illo cum neque tenetur accusantium possimus tempore dignissimos ipsam cupiditate quae odit veniam maiores, commodi ut officia doloremque explicabo fuga optio harum corporis. Voluptatem enim et repellat, quis neque officia sunt nesciunt reprehenderit aperiam animi. Voluptatem temporibus nihil adipisci veniam vitae nulla, numquam, voluptatum, qui quos molestiae omnis? Corporis nam fuga maiores odit error doloribus rem, reprehenderit perferendis corrupti.`,
            comments: [{}, {}, {}, {}, {}],
          },
          {},
          {},
        ],
      },
      {},
    ],
  },
  {
    id: 12,
    name: "Adhikansh Mittal",
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    likes: 0,
    data: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugiat quos harum quo alias ut tempore adipisci consectetur hic excepturi. At in sit, tempore eligendi ratione nobis iusto voluptates similique iure atque voluptatibus dignissimos ea, dolorem nisi. Perspiciatis facilis molestiae atque illo cum neque tenetur accusantium possimus tempore dignissimos ipsam cupiditate quae odit veniam maiores, commodi ut officia doloremque explicabo fuga optio harum corporis. Voluptatem enim et repellat, quis neque officia sunt nesciunt reprehenderit aperiam animi. Voluptatem temporibus nihil adipisci veniam vitae nulla, numquam, voluptatum, qui quos molestiae omnis? Corporis nam fuga maiores odit error doloribus rem, reprehenderit perferendis corrupti.`,
    comments: [{}, {}, {}, {}, {}],
  },
  {
    id: 12,
    name: "Adhikansh Mittal",
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    likes: 0,
    data: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fugiat quos harum quo alias ut tempore adipisci consectetur hic excepturi. At in sit, tempore eligendi ratione nobis iusto voluptates similique iure atque voluptatibus dignissimos ea, dolorem nisi. Perspiciatis facilis molestiae atque illo cum neque tenetur accusantium possimus tempore dignissimos ipsam cupiditate quae odit veniam maiores, commodi ut officia doloremque explicabo fuga optio harum corporis. Voluptatem enim et repellat, quis neque officia sunt nesciunt reprehenderit aperiam animi. Voluptatem temporibus nihil adipisci veniam vitae nulla, numquam, voluptatum, qui quos molestiae omnis? Corporis nam fuga maiores odit error doloribus rem, reprehenderit perferendis corrupti.`,
    comments: [{}, {}, {}, {}, {}],
  },
];

import "./style.css";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="container">
      {data.map((post) => {
        return <Card key={post.id} data={post} />;
      })}
    </div>
  );
}
