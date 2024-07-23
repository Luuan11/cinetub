import styles from './Favorites.module.css';

import Banner from 'components/Banner';
import Title from 'components/Title';
import Cards from 'components/Cards';
import { useFavoriteContext } from 'Context/Favorite';

function Favorites(){
    const { favorite } = useFavoriteContext();
    return(
        <>
           <Banner image="favorite" />

            <Title>
                <h1>My Favorites</h1>
            </Title>

            <section className={styles.section}>
                {favorite.map((fav) => {
                    return <Cards {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}
export default Favorites;