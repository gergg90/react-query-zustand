import Card from "./component/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteRepositoriesStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();
  const { addFavoriteRepos, favoriteReposIds, removeFavoriteRepos } =
    useFavoriteRepositoriesStore();

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      {data?.map((repos) => (
        <Card
          key={repos.id}
          idRepository={repos.id}
          repository={repos}
          isFavorite={favoriteReposIds.includes(repos.id)}
        />
      ))}
    </div>
  );
}

export default App;
