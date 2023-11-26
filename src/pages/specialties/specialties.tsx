import { Page } from 'pages';

import {
    SpecialtiesAccordions, Links, Footer,
} from 'widgets';

import { Container } from 'shared/ui';

export const SpecialtiesPage = () => (
    <Page>
        <Container>
            <SpecialtiesAccordions />
            <Links marginTop={100} marginBottom={64} />
            <Footer />
        </Container>
    </Page>
);
