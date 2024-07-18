import styles from './Card.module.css'
import iconFavorite from './favorite.png'

function Cards({id, title, capa}) {
    return(
        <div className={styles.card}>
            <img src={capa} alt={title} className={styles.capa}/>
            <h2>{title}</h2>
            <img src={iconFavorite} 
                 alt="Favorite video" 
                 className={styles.favorite}/>
        </div>
    )
}
export default Cards;