import { useEffect, useState } from 'react';

import { Size, SizeSchema } from './types';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height,
    };
}

const defaultSizeSchema: SizeSchema = {
    xs: 576,
    s: 768,
    m: 992,
    l: 1200,
    xl: 1400,
};

export function useWindowDimensions(schema?: SizeSchema) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const sizeSchema: SizeSchema = {
        ...defaultSizeSchema,
        ...schema,
    };

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    for (const key in sizeSchema) {
        // @ts-ignore
        if (windowDimensions.width < sizeSchema[key]) {
            return key;
        }
    }

    return 'xxl';
}
