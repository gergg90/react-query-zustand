import { create } from "zustand";

type favoriteReposState = {
  favoriteReposIds: number[];
  addFavoriteRepos: (id: number) => void;
  removeFavoriteRepos: (id: number) => void;
};

export const useFavoriteRepositoriesStore = create<favoriteReposState>(
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
  })
);
