import React, { FC, PropsWithChildren } from 'react';
import { Header } from 'widgets';

export const Page: FC<PropsWithChildren> = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);
