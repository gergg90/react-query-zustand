import { useFetchRepositories } from "./hooks/useRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();

  if (isLoading) return <div>Loading</div>;
  console.log(data);

  return <div>Hello App</div>;
}

export default App;
