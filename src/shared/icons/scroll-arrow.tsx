import { SVG } from './types';

export const ScrollArrowIcon: SVG = ({ ...props }) => (
    <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        style={{
            opacity: 0.8,
        }}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5 12H19M19 12L13 6M19 12L13 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
