import {
    Scroll, Map, Cards, Specialties, Partners, Links, Footer, Promo,
} from 'widgets';

import { Container } from 'shared/ui';

const HomePage = () => (
    <Container>
        <Promo
            image={`${process.env.PUBLIC_URL}/assets/promo.jpg`}
            title="Карьерные карты"
            description="
              Карьерные карты – duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariaturduis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariaturduis aute irure dolor
              in reprehenderit in volupta
            "
        />
        <Scroll marginTop={100} marginBottom={100} />
        <Map marginTop={100} marginBottom={100} pointers={4} />
        <Cards marginTop={100} marginBottom={100} />
        <Specialties marginTop={100} marginBottom={100} />
        <Partners marginTop={100} marginBottom={100} />
        <Links marginTop={100} marginBottom={64} />
        <Footer />
    </Container>
);

export default HomePage;
