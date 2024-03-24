import { SVG } from './types';

export const Arrow: SVG = ({ fill, ...props }) => (
    <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            /* eslint-disable-next-line max-len */
            d="M14.6974 1.41476C14.6974 1.0613 14.4109 0.774762 14.0574 0.774761L8.29741 0.774762C7.94394 0.774762 7.65741 1.0613 7.65741 1.41476C7.65741 1.76822 7.94394 2.05476 8.29741 2.05476L13.4174 2.05476L13.4174 7.17476C13.4174 7.52822 13.7039 7.81476 14.0574 7.81476C14.4109 7.81476 14.6974 7.52822 14.6974 7.17476L14.6974 1.41476ZM0.933505 15.4438L14.51 1.86731L13.6049 0.962213L0.0284087 14.5387L0.933505 15.4438Z"
            fill={fill}
        />
    </svg>
);