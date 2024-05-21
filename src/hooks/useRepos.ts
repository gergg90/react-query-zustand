import { useQuery } from "@tanstack/react-query";
import { apiGithub } from "../api/github";

const fetchRepos = async () => {
  const { data } = await apiGithub.get("/users/gergg90/repos");
  return data;
};

export const useFetchRepositories = () => {
  return useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
  });
};
