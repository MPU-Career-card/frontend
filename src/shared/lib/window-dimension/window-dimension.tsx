import { useEffect, useState } from 'react';

import { Size, SizeSchema } from './types';

interface WindowDimension {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimension {
    const { width, height } = window.screen;

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

export function useWindowDimensions(schema?: SizeSchema): Size {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimension>(getWindowDimensions);

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
        if (windowDimensions.width < sizeSchema[key as Size]!) {
            return key as Size;
        }
    }

    return 'xxl';
}
