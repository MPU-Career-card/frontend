import {
    SpecialtiesAccordions, Links, Footer, Promo,
} from 'widgets';

import { Container } from 'shared/ui';

const SpecialtiesPage = () => (
    <Container>
        <Promo
            image={`${process.env.PUBLIC_URL}/assets/promo.jpg`}
            title="Карьерные карты"
            description="
                    Карьерные карты – duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariaturduis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariaturduis aute irure dolor
                    in reprehenderit in volupta"
        />
        <SpecialtiesAccordions marginTop={100} marginBottom={100} />
        <Links links={[]} marginTop={100} marginBottom={64} />
        <Footer />
    </Container>
);

export default SpecialtiesPage;
