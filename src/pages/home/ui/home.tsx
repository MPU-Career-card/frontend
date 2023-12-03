import { Page } from 'pages';

import {
    Scroll, Map, Cards, Specialties, Partners, Links, Footer,
} from 'widgets';

import { Container } from 'shared/ui';

const HomePage = () => (
    <Page>
        <Container>
            <Scroll marginTop={100} marginBottom={100} />
            <Map marginTop={100} marginBottom={100} pointers={4} />
            <Cards marginTop={100} marginBottom={100} />
            <Specialties marginTop={100} marginBottom={100} />
            <Partners marginTop={100} marginBottom={100} />
            <Links marginTop={100} marginBottom={64} />
            <Footer />
        </Container>
    </Page>
);

export default HomePage;
