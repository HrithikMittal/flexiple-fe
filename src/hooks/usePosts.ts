import axios from "axios";
import { useQuery } from "react-query";

const getPosts = async () => {
  const res = await axios.get("http://localhost:4000/post");
  return res.data;
};

export const usePosts = () => {
  const { data, isLoading } = useQuery("posts", getPosts, {
    refetchOnWindowFocus: false,
  });
  return { data: data?.data || [], isLoading };
};
