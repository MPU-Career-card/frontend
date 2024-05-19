import { FC, useState } from 'react';

import { ImageProps } from './types';

export const Image: FC<ImageProps> = ({ src, alt, ...props }: ImageProps) => {
    const [imageHasError, setImageHasError] = useState<boolean>(false);
    const onError = () => {
        setImageHasError(true);
    };

    return imageHasError ? alt : (
        <img
            onError={onError}
            src={src}
            alt=""
            {...props}
        />
    );
};
