import { Page } from 'pages';

import {
    Scroll, Map, Cards, Specialties,
} from 'widgets';

import { Container } from 'shared/ui';
import { Routes } from 'shared/config';

const HomePage = () => (
    <Page>
        <Container>
            <Scroll marginTop={100} marginBottom={100} />
            <Map marginTop={100} marginBottom={100} />
            <Cards />
            <Specialties />

            {/* <Flex gap={32}>
                <ProCard
                    to={Routes.MAIN}
                    color="silver"
                    header="Технолог упаковочного производства"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat"
                    tags={['Product', 'Digital', 'Project']}
                />
            </Flex>
            <Accordion
                tags={(
                    <Flex gap={8}>
                        <Tag
                            weight="semi"
                            color="orange"
                            textColor="white"
                        >
                            ПИ
                        </Tag>
                        <Tag weight="medium">
                            29.03.03
                        </Tag>
                    </Flex>
                )}
                text="Дизайн и технологии производства визуального контента"
            >
                <SpecialityCard
                    to={Routes.MAIN}
                    faculty="Факультет экономики и управления"
                    name="Управление бизнес-процессами (Менеджмент)"
                    budgetPlacesCount={{ value: 7, year: 2023 }}
                    passingScore={{ value: 298, year: 2022 }}
                    price={{ value: 268230, year: 2023 }}
                    period={4}
                />
            </Accordion> */}
        </Container>
    </Page>
);

export default HomePage;
