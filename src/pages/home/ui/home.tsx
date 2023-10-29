import { Page } from 'pages';

import {
    ArrowLink, CardLink, Flex, Text,
} from 'shared/ui';
import { Routes } from 'shared/config';

const HomePage = () => (
    <Page>
        <Text>Главная</Text>
        <ArrowLink color="blue" to={Routes.MAIN} />
        <ArrowLink color="blue" to={Routes.MAIN} />
        <ArrowLink color="silver" width={40} to={Routes.MAIN} />
        <ArrowLink color="transparent" width={64} to={Routes.MAIN} />
        <Flex gap={32}>
            <CardLink to={Routes.MAIN} color="orange">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad fugiat mollitia sequi sint
                    temporibus. Atque dolor dolorum,
                    id laborum libero odio perferendis provident
                    quas recusandae, saepe soluta tenetur ut velit?
                </div>
                <div>lorem</div>
            </CardLink>
            <CardLink to={Routes.MAIN} color="orange">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad fugiat mollitia sequi sint
                    temporibus. Atque dolor dolorum,
                    id laborum libero odio perferendis provident
                    quas recusandae, saepe soluta tenetur ut velit?
                </div>
                <div>f</div>
            </CardLink>
            <CardLink to={Routes.MAIN} color="orange">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad fugiat mollitia sequi sint
                    temporibus. Atque dolor dolorum,
                    id laborum libero odio perferendis provident
                    quas recusandae, saepe soluta tenetur ut velit?
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad fugiat mollitia sequi sint
                    temporibus. Atque dolor dolorum,
                    id laborum libero odio perferendis provident
                    quas recusandae, saepe soluta tenetur ut velit?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad fugiat mollitia sequi sint
                    temporibus. Atque dolor dolorum,
                    id laborum libero odio perferendis provident
                    quas recusandae, saepe soluta tenetur ut velit?
                </div>
            </CardLink>
        </Flex>
    </Page>
);

export default HomePage;
