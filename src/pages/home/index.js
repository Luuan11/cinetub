import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";

function Home(){
    return (
        <>
            <Header />
            <Banner image="home" />
            <Title>
                <h1>Local perfeito para seus videos especiais!</h1>
            </Title>
            <Footer />
        </>
    )
}
export default Home;