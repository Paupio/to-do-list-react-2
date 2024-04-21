import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Paulina Piotrzkowska"
            body={
                <>
                    <p>Mieszkam i pracuje w Bydgoszczy.</p>
                    <p>Jestem po kierunku administracja, ale także kiedyś uczyłam się w szkole informatycznej, ale niestety to było już dawno temu i dużo się zapomniało...</p>
                    <p>Aktualnie pracuję w księgowości, ale chciałabym się rozwijać i zdobyć nowe cenne doświadczenie, dlatego też próbuję swoich sił w programowaniu!</p>
                </>}
        />
    </Container>
);

export default Author;
