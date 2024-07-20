import styles from './Favorites.module.css';

import Banner from 'components/Banner';
import Title from 'components/Title';
import Cards from 'components/Cards';

function Favorites(){
    return(
        <>
           <Banner image="favorite" />

            <Title>
                <h1>My Favorites</h1>
            </Title>

            <section className={styles.section}>
                <Cards></Cards>
            </section>
        </>
    )
}
export default Favorites;