import { useQuery } from "@tanstack/react-query";
import { apiGithub } from "../api/github";
import { Repository } from "./types";

const fetchRepos = async () => {
  const { data } = await apiGithub.get<Repository[]>("/users/gergg90/repos");
  return data;
};

export const useFetchRepositories = () => {
  return useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
  });
};
