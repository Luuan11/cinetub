import { useFavoriteContext } from 'Context/Favorite';
import styles from './Card.module.css'
import iconFavorite from './favorite.png'
import iconDisfavorite from "./unfavorite.png"
import { Link } from 'react-router-dom';

function Cards({ id, title, capa }) {
    const { favorite, addFav } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icon = !isFavorite ? iconFavorite : iconDisfavorite;
    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={title} className={styles.capa}/>
                <h2>{title}</h2>
            </Link>
            <img src={icon} 
                 alt="Favorite video"
                 className={styles.favorite}
                 onClick={() => {
                    addFav({ id, title, capa })
                 }}/>
        </div>
    )
}
export default Cards;