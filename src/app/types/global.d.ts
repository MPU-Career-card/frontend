declare module '*.scss' {
    const content: Record<string, string>;

    export default content;
}

declare module '*.svg' {
    import { FC, SVGProps } from 'react';

    const SVG: FC<SVGProps<SVGSVGElement>>;
    export default SVG;
}
