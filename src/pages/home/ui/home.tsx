import { Page } from 'pages';
import {
    Accordion, Card, Tag, Text,
} from 'shared/ui';

const HomePage = () => (
    <Page>
        <Text>Главная</Text>
        <Accordion
            tags={[<Tag color="orange">ПИ</Tag>, <Tag>29.11.11</Tag>]}
            text={<Text>Дизайн и производство</Text>}
        >
            <Card text="asdfasdf" />
            <Card text="asdfasdf" />
            <Card text="asdfasdf" />
        </Accordion>
    </Page>
);

export default HomePage;
