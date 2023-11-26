import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function getSizeCategory(width: number) {
    if (width < 576) {
        return 'xs';
    } if (width < 768) {
        return 's';
    } if (width < 992) {
        return 'm';
    } if (width < 1200) {
        return 'l';
    } if (width < 1400) {
        return 'xl';
    }
    return 'xxl';
}

export function useWindowDimensions() {
    // eslint-disable-next-line max-len
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sizeCategory = getSizeCategory(windowDimensions.width);

    return sizeCategory;
}
