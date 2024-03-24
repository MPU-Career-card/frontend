import { Page } from 'pages';

import {
    SpecialtiesAccordions, Links, Feedback, Promo,
} from 'widgets';

import { Container } from 'shared/ui';

const SpecialtiesPage = () => (
    <Page>
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
            <Links marginTop={100} marginBottom={64} />
            <Feedback />
        </Container>
    </Page>
);

export default SpecialtiesPage;
