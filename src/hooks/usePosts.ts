import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { apiCall } from "@/utils/apiCall";

const getPosts = async () => {
  const url = process.env.REACT_APP_BASE_URL + "/post";
  const res = await axios.get(url);
  return res.data;
};

export const usePosts = () => {
  const { data, isLoading } = useQuery("posts", getPosts, {
    refetchOnWindowFocus: false,
  });
  return { data: data?.data || [], isLoading };
};

export const useEditPost = () => {
  const queryClient = useQueryClient();

  const editMutation = useMutation(
    async (data: any) => {
      const url = process.env.REACT_APP_BASE_URL + "/post/" + data.path;
      const res = await apiCall(url, data.method, data.body);
      return res.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
  return editMutation;
};
