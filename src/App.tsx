import Card from "./component/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteRepositoriesStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading } = useFetchRepositories("midudev");
  const { favoriteReposIds } = useFavoriteRepositoriesStore();

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      {data?.map((repos) => (
        <Card
          key={repos.id}
          repository={repos}
          isFavorite={favoriteReposIds.includes(repos.id)}
        />
      ))}
    </div>
  );
}

export default App;
