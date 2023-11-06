import { SVG } from './types';

export const Logo: SVG = ({ ...props }) => (
    <svg
        width="39"
        height="34"
        viewBox="0 0 39 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0H22.5818L11.7927 16.56L22.5818 33.12H0V0Z"
            fill="#7F4E9B"
        />
        <path
            /* eslint-disable-next-line max-len */
            d="M28.1018 0H38.64L27.8509 16.56L38.64 33.12H28.1018L17.3127 16.56L28.1018 0Z"
            fill="white"
        />
    </svg>
);
