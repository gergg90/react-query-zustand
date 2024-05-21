import { Repository } from "../hooks/types";
import { useFavoriteRepositoriesStore } from "../store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

function Card({ repository, isFavorite }: CardProps) {
  const { removeFavoriteRepos, addFavoriteRepos } =
    useFavoriteRepositoriesStore();

  const handleLike = () => {
    if (isFavorite) removeFavoriteRepos(repository.id);
    if (!isFavorite) addFavoriteRepos(repository.id);
  };

  const buttonStyle = {
    backgroundColor: isFavorite ? "#FF0000" : "#0000FF",
  };

  return (
    <div>
      <h3>{repository.name}</h3>
      <button style={buttonStyle} onClick={handleLike}>
        {isFavorite ? <>Dislike</> : <>Like </>}
      </button>
    </div>
  );
}

export default Card;
