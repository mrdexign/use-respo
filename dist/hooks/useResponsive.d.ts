import { FC } from 'react';
declare type BreakPoint = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const useResponsive: (breakPoint?: BreakPoint) => {
    Tiny: FC<{
        down?: boolean | undefined;
        up?: boolean | undefined;
    }>;
    Mobile: FC<{
        down?: boolean | undefined;
        up?: boolean | undefined;
    }>;
    Tablet: FC<{
        down?: boolean | undefined;
        up?: boolean | undefined;
    }>;
    Laptop: FC<{
        down?: boolean | undefined;
        up?: boolean | undefined;
    }>;
    Tv: FC<{
        down?: boolean | undefined;
        up?: boolean | undefined;
    }>;
};
export default useResponsive;
