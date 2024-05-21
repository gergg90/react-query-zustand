import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { apiGithub } from "../api/github";
import { Repository } from "./types";

const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, gitHubUser] = ctx.queryKey;

  const { data } = await apiGithub.get<Repository[]>(
    `/users/${gitHubUser}/repos`
  );
  return data;
};

export const useFetchRepositories = (gitHubUser: string) => {
  return useQuery({
    queryKey: ["repos", gitHubUser],
    queryFn: fetchRepos,
  });
};
