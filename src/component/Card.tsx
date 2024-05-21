import { Repository } from "../hooks/types";
import { useFavoriteRepositoriesStore } from "../store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
  idRepository: number;
};

function Card({ repository, isFavorite, idRepository }: CardProps) {
  const { removeFavoriteRepos, addFavoriteRepos } =
    useFavoriteRepositoriesStore();

  const handleLike = () => {
    if (isFavorite) removeFavoriteRepos(idRepository);
    if (!isFavorite) addFavoriteRepos(idRepository);
  };

  return (
    <div>
      <h3>{repository.name}</h3>
      <button onClick={handleLike}>
        {isFavorite ? <>Dislike</> : <>Like </>}
      </button>
    </div>
  );
}

export default Card;
