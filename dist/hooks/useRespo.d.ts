import { FC } from 'react';
declare type BreakPoint = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export declare type RespoComponent = FC<{
    down?: boolean;
    up?: boolean;
    onDown?: Function;
    onUp?: Function;
}>;
declare const useRespo: (breakPoint?: BreakPoint) => {
    Tiny: RespoComponent;
    Mobile: RespoComponent;
    Tablet: RespoComponent;
    Laptop: RespoComponent;
    Tv: RespoComponent;
};
export default useRespo;
