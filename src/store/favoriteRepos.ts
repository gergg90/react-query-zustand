import { create } from "zustand";
import { persist } from "zustand/middleware";

type favoriteReposState = {
  favoriteReposIds: number[];
  addFavoriteRepos: (id: number) => void;
  removeFavoriteRepos: (id: number) => void;
};

export const useFavoriteRepositoriesStore = create(
  persist<favoriteReposState>(
    (set) => ({
      favoriteReposIds: [],
      addFavoriteRepos: (id: number) =>
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, id],
        })),
      removeFavoriteRepos: (id: number) =>
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    { name: "favorite-repos" }
  )
);
