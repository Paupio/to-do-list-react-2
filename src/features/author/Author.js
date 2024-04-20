import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => {

    return (
        <>
            <Header title="O autorze" />
            <Section
                title="Paulina Piotrzkowska"
                body={
                    <>
                        <p>Mieszkam i pracuje w Bydgoszczy.</p>
                        <p>Aktualnie pracuję w księgowości, ale chciałabym się rozwijać i zdobyć nowe cenne doświadczenie, dlatego też próbuję swoich sił w programowaniu!</p>
                    </>}
            />
        </>
    );
};

export default Author;




