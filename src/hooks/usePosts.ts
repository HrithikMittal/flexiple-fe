import axios from "axios";
import { useQuery } from "react-query";

const getPosts = async () => {
  const url = process.env.REACT_APP_BASE_URL || "";
  const res = await axios.get(url);
  return res.data;
};

export const usePosts = () => {
  const { data, isLoading } = useQuery("posts", getPosts, {
    refetchOnWindowFocus: false,
  });
  return { data: data?.data || [], isLoading };
};
